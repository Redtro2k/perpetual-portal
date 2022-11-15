<?php
namespace App\Http\Traits;

use App\Models\AcademicYear;
use App\Models\YearLevel;

trait AllYearLevelTrait{

    public function __construct(YearLevel $yearlevel){
        $this->yearlevel = $yearlevel;
    }

    public function getAllYearLevel(){
        $single = $this->yearlevel::all()->map(fn($f) => [
            'id' => $f->id,
            'year_level' => $f->name,
            'type' => $f->type,
        ]);
        return $single;
    }
    public function getAllYearLevelWithPaginate(){
        return YearLevel::paginate(5, ["*"], 'yearlevels')->withQueryString()->through(fn($f) => [
            'id' => $f->id,
            'year_level' => $f->name,
            'academic_year' => $f->schoolYear->first()->start .' - '. $f->schoolYear->first()->end,
            'type' => $f->type,
        ]);
    }


    public function getFindYearLevel($id){
        return $this->yearlevel::find($id);
    }

    public function checkIfNameExist($id, $name){
        // return $this->yearlevel::whereName($name)->get()->exists();
        $ay = AcademicYear::find($id);
        return $ay->yearLevel->where('name', $name)->count();
    }
}
?>
