<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    public function run()
    {
        Role::create(['name' => 'administrator']);
        Role::create(['name' => 'student']);
        Role::create(['name' => 'superadministrator']);
        Role::create(['name' => 'teacher']);
        $user = User::create([
            'name' => 'Darwin Llacuna',
            'email' => 'darwin@dev.com',
            'gender' => 'male',
            'password' => '$2y$10$s7bggUGJqXkTSZzMnysvgOVpEs.rJBgKL8hZHfpRd64.BtDylX4BC',
        ]);
        $user->assignRole('superadministrator');
    }
}
