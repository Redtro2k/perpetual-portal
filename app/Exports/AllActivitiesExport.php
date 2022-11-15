<?php
namespace App\Exports;

use App\Models\Modules;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class AllActivitiesExport implements WithMultipleSheets
{
    use Exportable;

    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function sheets(): array
    {
        $sheets = [];
        $modules = Modules::find($this->id)->activities;
        foreach($modules as $item){
            $sheets[] = new AllQuestionAnswer($item->id);
        }
        return $sheets;
    }
}
