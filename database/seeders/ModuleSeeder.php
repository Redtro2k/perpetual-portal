<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Modules;

class ModuleSeeder extends Seeder
{
    public function run()
    {
        //
        Modules::create([
            'name' => 'What is HTML',
            'grading' => 'prelim',
            'description' => 'hello guys today were gonna talk about the html',
            'submitted_by' => 1
        ]);
    }
}
