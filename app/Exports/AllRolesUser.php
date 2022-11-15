<?php
namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class AllRolesUser implements FromQuery, WithMapping, WithHeadings
{
    use Exportable;
    public function __construct(string $role_name)
    {
        $this->role_name = $role_name;
    }
    public function headings(): array
    {
        return [
            'UID',
            'NAME',
            'EMAIL',
            'GENDER',
            'ROLES',
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
            $row->getRoleNames(),
            $row->created_at->format('Y-m-d'),
        ];
    }
     public function query()
     {
        return User::query()->with('roles')->whereHas("roles", function($q){
            $q->where('name', $this->role_name);
        });
     }
}
