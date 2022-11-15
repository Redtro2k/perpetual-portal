<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class AdminSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'Darwin Llacuna',
            'email' => 'darwin@dev.com',
            'gender' => 'male',
            'password' => '$2y$10$s7bggUGJqXkTSZzMnysvgOVpEs.rJBgKL8hZHfpRd64.BtDylX4BC', //darwin123
        ]);
    }
}
