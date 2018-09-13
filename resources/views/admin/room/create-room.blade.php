
@extends('admin.admin-layouts.admin-app')
@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                ROOM
                <small>Create Room</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="{{route('admin')}}"><i class="fa fa-dashboard"></i>Home</a></li>
                <li><a href="{{route('room.index')}}">Room</a></li>
                <li class="active">Create Room</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
        @include('common.errors')
            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">Create Room</h3>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i class="fa fa-minus"></i></button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                            <i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="col-md-6">
                        <!-- general form elements -->
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title"></h3>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start -->
                            <form action="{{route('room.store')}}" method="POST">
                                <div class="box-body">
                                    {{csrf_field()}}
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="text" id="nameCreateRoom" name="nameCreateRoom" class="form-control" >
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Display Name</label>
                                        <input type="text" id="disNameCreateRoom" name="disNameCreateRoom" class="form-control" >
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea id="desCreateRoom" name="desCreateRoom" class="form-control" rows="3" placeholder="Enter ..."></textarea>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" id="projectorsCreateRoom" name="projectorsCreateRoom" class="form-check-input" value="1"> Has Projectors
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input type="checkbox" id="boardCreateRoom" name="boardCreateRoom" class="form-check-input" value="1"> Has Board
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="colorCreateRoom">Color : </label>
                                        <input type="color" id="colorCreateRoom" name="colorCreateRoom" value="#f6b73c" />
                                    </div>
                                </div>
                                <!-- /.box-body -->
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-primary">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /.content -->
    </div>
@endsection
