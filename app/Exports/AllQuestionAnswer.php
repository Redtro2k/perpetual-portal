<?php
namespace App\Exports;

use App\Http\Traits\AllActivitiesTraits;
use App\Models\Activities;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithTitle;

class AllQuestionAnswer implements FromCollection, WithMapping, WithHeadings, WithTitle
{
    use AllActivitiesTraits, Exportable;

    public function __construct(int $id)
    {
        $this->id = $id;
    }
    public function headings(): array
    {
        return [
            [Activities::find($this->id)->title. ' - '.Activities::find($this->id)->created_at->format('Y-m-d')],
            ['NAME',
            'SCORES']
        ];
    }
    public function map($row): array
    {
        return [
            $row->name,
            $row->pivot->scores];

    }
    public function collection()
    {
        return Activities::find($this->id)->scores;
    }
    public function title(): string
    {
        return Activities::find($this->id)->title;
    }
}
