<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Program;
use App\Models\Student;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //
            'name' => $this -> faker -> firstname(),
            'last_name' => $this -> faker -> lastname(), 
            'email' => $this -> faker -> unique() -> safeEmail(50), 
            'semester' => $this -> faker -> numberBetween(1, 10), 
            'program_id' => Program::all() -> random() -> id,
        ];
    }
}
