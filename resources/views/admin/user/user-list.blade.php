
@extends('admin.admin-layouts.admin-app')
@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                User
                <small>User List</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="{{route('admin')}}"><i class="fa fa-dashboard"></i>Home</a></li>
                <li><a href="{{route('user.index')}}">User</a></li>
                <li class="active">User List</li>
            </ol>
        </section>
        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}" />
        <!-- Main content -->
        <section class="content">

            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">User List</h3>
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
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {{$i = 0}}
                        @foreach ($users as $user)
                            {{$i++}}
                            <tr id="user-list-{{$user->id}}">
                                <td>{{$i}}</td>
                                <td>{{$user->name}}</td>
                                <td>{{$user->email}}</td>
                                <td>
                                    <img style="width: 50px; height: 50px;" src="{{$user->images}}" class="img-circle">
                                </td>
                                <td>
                                    @foreach($allRole as $role)
                                        @if(isset($roleOfUser[$user->id][$role->id]))
                                            <input type="checkbox" data-id="{{$user->id}}" data-idrole="{{$role->id}}" class="checkBoxRoleOfUser custom-control-input" value="{{$role->id}}" checked> {{$role->display_name}}<br>
                                        @elseif(!isset($roleOfUser[$user->id][$role->id]))
                                            <input type="checkbox" data-id="{{$user->id}}" data-idrole="{{$role->id}}" class="checkBoxRoleOfUser custom-control-input" value="{{$role->id}}"> {{$role->display_name}}<br>
                                        @endif
                                    @endforeach
                                </td>
                                <td>
                                    <button id="btn-delete-user" name="btn-delete-user" data-id="{{$user->id}}" class="btn-delete-user btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
    <!-- /.modal -->
@endsection
