<?php
namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use App\Models\User;

class AllUsersExport implements FromCollection, WithHeadings, WithMapping
{
    use Exportable;

    public function headings(): array
    {
        return [
            'UID',
            'NAME',
            'EMAIL',
            'GENDER',
            'BIRTHDATE',
            'ROLE',
            'DATE CREATED'
        ];
    }
    public function map($row): array
    {
        return [
            $row->id,
            $row->name,
            $row->email,
            $row->gender,
            $row->birthdate,
            $row->getRoleNames(),
            $row->created_at->format('Y-m-d'),
        ];
    }
    public function collection()
    {
        return User::all();
    }
}
