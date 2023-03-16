<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Program;
use App\Models\Student;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $program = new Program();
        $program -> name = 'LAE';
        $program -> description = 'Carrera';
        $program -> key = 'LAE';
        $program -> save(); 
    }
}
