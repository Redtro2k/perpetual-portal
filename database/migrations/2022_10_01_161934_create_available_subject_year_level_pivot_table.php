<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateAvailableSubjectYearLevelPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('available_subject_year_level', function (Blueprint $table) {
            $table->unsignedBigInteger('available_subject_id')->index();
            $table->foreign('available_subject_id')->references('id')->on('available_subjects')->onDelete('cascade');
            $table->unsignedBigInteger('year_level_id')->index();
            $table->foreign('year_level_id')->references('id')->on('year_levels')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('available_subject_year_level');
    }
}
