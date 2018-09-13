
@extends('admin.admin-layouts.admin-app')
@section('content')
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                ROLE
                <small>Role List</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="{{route('admin')}}"><i class="fa fa-dashboard"></i>Home</a></li>
                <li><a href="{{route('role.index')}}">Role</a></li>
                <li class="active">Role List</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">

            <!-- Default box -->
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">Role List</h3>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {{$i = 0}}
                        @foreach ($roles as $role)
                            {{$i++}}
                            <tr id="role-list-{{$role->id}}">
                                <td>{{$i}}</td>
                                <td id="disNameRoleList-{{$role->id}}">{{$role->display_name}}</td>
                                <td id="descriptionRoleList-{{$role->id}}">{{$role->description}}</td>
                                <td><button id="btn-update-role" name="btn-update-role" data-id="{{$role->id}}" data-name="{{$role->name}}" data-disname="{{$role->display_name}}" data-description="{{$role->description}}" class="btn-update-role btn btn-warning">Change</button></td>
                                <td><button id="btn-delete-role" name="btn-delete-role" data-id="{{$role->id}}" class="btn-delete-role btn btn-danger">Delete</button></td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
    <div class="modal modal-success fade" id="modalUpdateRole">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Update Role</h4>
                </div>
                <div class="modal-body">
                    <form action="" id="updateRole">
                        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}" />
                        <input type="hidden" id="idRole" name="idRole" value="">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" id="nameUpdateRole" name="nameUpdateRole" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Display Name</label>
                            <input type="text" id="displayNameUpdateRole" name="displayNameUpdateRole" class="form-control" >
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea id="descriptionUpdateRole" name="descriptionUpdateRole" class="form-control" rows="3" placeholder="Enter ..."></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                    <button type="button" id="submitUpdateRole" class=" btn btn-outline">Save changes</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
@endsection
