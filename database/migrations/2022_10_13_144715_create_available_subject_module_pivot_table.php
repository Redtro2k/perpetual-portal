<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateAvailableSubjectModulePivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('available_subject_modules', function (Blueprint $table) {
            $table->unsignedBigInteger('available_subject_id')->index();
            $table->foreign('available_subject_id')->references('id')->on('available_subjects')->onDelete('cascade');
            $table->unsignedBigInteger('modules_id')->index();
            $table->foreign('modules_id')->references('id')->on('modules')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('available_subject_module');
    }
}
