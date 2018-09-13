<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */


Route::get('/hoclaravel', function (){
    return "hoc laravel";
});
Route::namespace('WEB')->group(function () {
    Route::get('/', 'AuthenticateController@getLogin')->name('loginIndex');
    Route::post('/login', 'AuthenticateController@postLogin')->name('postLogin');
    Route::get('login/slack', 'AuthenticateController@loginSlack')->name('loginSlack');
    Route::get('login/logout', 'AuthenticateController@logout')->name('logout');
    Route::group(['middleware' => 'CheckAuth'], function () {
        Route::prefix('home')->group(function () {
            Route::get('/', 'HomeController@index')->name('home');
            Route::post('/post/rooms', 'HomeController@responseView')->name('postRoomView');
            Route::post('/post/createBooking', 'BookingController@create')->name('createBooking');
            Route::post('/post/updateBooking', 'BookingController@update')->name('updateBooking');
            Route::post('/post/deleteBooking', 'BookingController@delete')->name('deleteBooking');
            Route::post('/changePassword', 'HomeController@changePassword')->name('changePassword');
        });
        Route::namespace('Admin')->group(function () {
            Route::group(['middleware' => 'CheckAdmin'], function () {
                Route::prefix('admin')->group(function () {
                    Route::get('/index', 'AdminHomeController@index')->name('admin');
                    Route::resource('room', 'RoomAdminController');
                    Route::resource('role', 'RoleAdminController');
                    Route::resource('booking', 'BookingAdminController');
                    Route::resource('user', 'UserAdminController');
                });
            });
        });
    });
});
