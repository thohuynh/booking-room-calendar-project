
@extends('admin.admin-layouts.admin-app')
@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                ROOM
                <small>Room List</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="{{route('admin')}}"><i class="fa fa-dashboard"></i>Home</a></li>
                <li><a href="{{route('room.index')}}">Room</a></li>
                <li class="active">Room List</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">

            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">Room List</h3>
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
                            <th>Name</th>
                            <th>Description</th>
                            <th>Has Projectors</th>
                            <th>Has Board</th>
                            <th>color</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {{$i = 0}}
                        @foreach ($rooms as $room)
                            {{$i++}}
                            <tr id="room-list-{{$room->id}}">
                                <td>{{$i}}</td>
                                <td id="disNameRoomList-{{$room->id}}">{{$room->display_name}}</td>
                                <td id="desRoomList-{{$room->id}}">{{$room->description}}</td>
                                <td id="projectorsRoomList-{{$room->id}}">
                                    @if($room->has_projectors == 1)
                                        <i class="far fa-check-circle"></i>
                                        @elseif($room->has_projectors == 0)
                                        <i class="far fa-circle"></i>
                                    @endif
                                </td>
                                <td id="boardRoomList-{{$room->id}}">
                                    @if($room->has_board == 1)
                                        <i class="far fa-check-circle"></i>
                                    @elseif($room->has_board == 0)
                                        <i class="far fa-circle"></i>
                                    @endif
                                </td>
                                <td><input type="color" id="colorRoomList-{{$room->id}}" value="{{$room->color}}" disabled /></td>
                                <td>
                                    <button id="btn-update-room" name="btn-update-room" data-id="{{$room->id}}" data-name="{{$room->name}}" data-disname="{{$room->display_name}}" data-description="{{$room->description}}" data-projectors="{{$room->has_projectors}}" data-board="{{$room->has_board}}" data-colorroom="{{$room->color}}" class="btn-update-room btn btn-warning">Change</button>
                                </td>
                                <td><button id="btn-delete-room" name="btn-delete-room" data-id="{{$room->id}}" class="btn-delete-room btn btn-danger">Delete</button></td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
    <div class="modal modal-success fade" id="modalUpdateRoom">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Update Room</h4>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}" />
                    <input type="hidden" id="idRoom" name="idRoom" value="">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" id="nameUpdateRoom" name="nameUpdateRoom" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Display Name</label>
                        <input type="text" id="disNameUpdateRoom" name="disNameUpdateRoom" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea id="desUpdateRoom" name="desUpdateRoom" class="form-control" rows="3" placeholder="Enter ..."></textarea>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="projectorsUpdateRoom" name="projectorsUpdateRoom" class="form-check-input" value="1"> Has Projectors
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" id="boardUpdateRoom" name="boardUpdateRoom" class="form-check-input" value="1"> Has Board
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="colorCreateRoom">Color : </label>
                        <input type="color" id="colorUpdateRoom" name="colorUpdateRoom" value="#f6b73c" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <button type="button" id="submitUpdateRoom" class=" btn btn-outline">Save changes</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
@endsection
