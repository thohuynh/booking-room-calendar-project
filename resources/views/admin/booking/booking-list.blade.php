
@extends('admin.admin-layouts.admin-app')
@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Booking
                <small>Booking List</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="{{route('admin')}}"><i class="fa fa-dashboard"></i>Home</a></li>
                <li><a href="{{route('booking.index')}}">Booking</a></li>
                <li class="active">Booking List</li>
            </ol>
        </section>
         <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}" />

        <!-- Main content -->
        <section class="content">
        @foreach($data as $room)
            <!-- Default box -->
            <div class="box collapsed-box">
                <div style="background-color: {{$room->color}}" class="box-header with-border">
                    <h3 class="box-title">{{$room->display_name}}</h3>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i class="fa fa-minus"></i></button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                            <i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <table class="tableData table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>User name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                            <th>Description</th>
                            <th>Time-Start</th>
                            <th>Time-End</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {{$i = 0}}
                        @foreach ($room->bookings as $booking)
                            {{$i++}}
                        <tr id="booking-list-{{$booking->id}}">
                            <td>{{$i}}</td>
                            <td>{{$userOfBooking[$booking->user_id]->name}}</td>
                            <td>{{$userOfBooking[$booking->user_id]->email}}</td>
                            <td><img style="width: 50px; height: 50px;" src="{{$userOfBooking[$booking->user_id]->images}}" class="img-circle"></td>
                            <td>{{$booking->description}}</td>
                            <td>{{date('d-m-Y', strtotime($booking->day))}} | {{$booking->hour_start}}</td>
                            <td>{{date('d-m-Y', strtotime($booking->day))}} | {{$booking->hour_end}}</td>
                            <td><button  name="btn-delete-booking" data-id="{{$booking->id}}" class="btn-delete-booking btn btn-danger">Delete</button></td>
                        </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            {{--end box--}}
        @endforeach
        </section>
    </div>
@endsection
