<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\NewAccountRequest;
use Inertia\Inertia;
use Spatie\Permission\Models\Role as Role;
use App\Models\User;


class NewAccountController extends Controller
{
    //
    public function create(){
        $roles = Role::all()->map(fn($m) => [
            'name' => $m->name
        ]);
        return Inertia::render('Admin/NewAccount/AdminNewAccount', [
            'roles' => $roles
        ]);
    }

    public function store(NewAccountRequest $request){
        if($request->validated()){
            $user = User::create([
                'firstname' => $request['firstname'],
                'lastname' => $request['lastname'],
                'middlename' => $request['middle'],
                'name' => $request['name'],
                'email' => $request['email'],
                'username' => $request['username'],
                'gender' => $request['gender'],
                'password' => Hash::make($request['password']),
                'birthdate' => $request['birthdate']
            ]);
            $user->assignRole($request['roles']);
            return redirect()->back()->with('success', 'Successfully created new User, '. $request['name']);
        }
    }
}
