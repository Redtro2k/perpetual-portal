<?php

namespace App\Http\Controllers\Schools;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\School\SchoolRequest;
use App\Models\Schools\School;
use Illuminate\Support\Str;
use Spatie\Activitylog\Models\Activity;


class SchoolController extends Controller
{
    public function __construct(School $school)
    {
        $this->school = $school;
    }

    public function index()
    {
        if (!$this->school->checkIfExist()) //if not exists school
        {
            return auth()->user()->can('manage_super_admin') //if the user is administrator
                ? Inertia::render('Admin/School/AdminSchoolCreate')->with('message', 'No school Registered so we need to create now!')
                //if the user is not administrator
                : dd('No School');
        } else {
            //if exist
            return Inertia::render('Admin/School/AdminSchoolIndex', [
                'school' => $this->school->fetchSchool(),
                'school_image' => $this->school->fetchSchool()->getfirstMedia('school')->getUrl(),
                'activity' => Activity::where('log_name', 'school')->get(['event', 'description', 'updated_at']),
            ]);
        }
    }

    public function create()
    {
        return ($this->school->checkIfExist())
            ? redirect(route("school.index"))->with('warning', 'Error, cannot created its because its already existed!')
            : Inertia::render('Admin/School/AdminSchoolCreate');
    }

    public function store(SchoolRequest $request)
    {
        $attr = $request->validated();
        if ($request->hasFile('image')) {
            $this->school->addActivity('created', auth()->user());
            $this->school->create([
                'name' => $attr['name'],
                'description' => $attr['description'],
                'region' => $attr['region'],
                'province' => $attr['province'],
                'address' => $attr['address'],
                'contact' => $attr['contact'],
                'school_id' => rand(2, 99999)
            ])->addMediaFromRequest('image')
                ->withResponsiveImages()
                ->toMediaCollection('school');
            return redirect(route("school.index"))->with('success', 'successfully created!');
        } else {
            abort(403);
        }
    }

    public function edit($id)
    {
        $schools = $this->school->find($id);
        if ($schools) {
            return Inertia::render('Admin/School/AdminSchoolEdit', [
                'school' => $schools->first(),
                'school_image' => $this->school->first()->getMedia('school')->first()->getUrl()
            ]);
        } else {
            return abort(404);
        }
    }

    public function update(SchoolRequest $request, $id)
    {
        $attr = $request->validated();
        $schools = $this->school->find($id)->first();
        if ($attr) {
            $schools->update([
                'name' => $attr['name'],
                'description' => $attr['description'],
                'region' => $attr['region'],
                'province' => $attr['province'],
                'address' => $attr['address'],
                'contact' => $attr['contact']
            ]);
            if ($attr['image']) {
                $schools->addMediaFromRequest('image')
                    ->withResponsiveImages()
                    ->toMediaCollection('school');
            }
            $this->school->addActivity('updated', auth()->user());
            return redirect()->route('school.index');
        }
    }

    public function destroy($id)
    {
        $this->school->removeSchool();
        $this->school->addActivity("deleted", auth()->user());
        return redirect(route("school.create"))->with('success', 'successfully deleted School!');
    }
}
