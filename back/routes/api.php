<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactUsController;



Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');
});


Route::controller(ContactUsController::class)->group(function () {
    Route::post('save-contact', 'store');
    Route::get('selectContacts', 'selectContacts');
    Route::post('massiveEmails', 'massiveEmails');
    Route::post('smsconfirmation', 'smsconfirmation');
});

