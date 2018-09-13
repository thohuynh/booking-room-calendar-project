
@extends('layouts.app')
@section('content')
    <div class="row mb-5">
        <div  class="col-4 ">
            <h1>Booking Room</h1>
            <input type="hidden" id="idAuth" value="{{Auth::id()}}">
        </div>
        <div  class="col-8 form-inline">
            <div class="dropdown show">
              <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuDocumentation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Documentation
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuDocumentation">
                <a class="dropdown-item" id="howCreateBook" name="howCreateBook">How to create Book ?</a>
                <a class="dropdown-item" id="howUpdateBook" name="howUpdateBook">How to update Book ?</a>
                <a class="dropdown-item" id="howDeleteBook" name="howDeleteBook">How to delete Book ?</a>
              </div>
            </div>
            <div class="dropdown show ml-4">
              <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{Auth::user()->name}}
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuUser">
                @if($isAdmin == 1)
                <a href="{{route('admin')}}" class="dropdown-item">Admin Page</a>
                @elseif($isAdmin == 0)
                @endif
                <button class="changePas dropdown-item" data-toggle="modal" data-target="#modalChangePas">Change Password</button>
                <a href="{{route('logout')}}" class="dropdown-item">Log Out</a>
            </div>
        </div>
    </div>
    <div class="row ">
        <div class="col-12">
            <div id='calendar-container'>
                <div id='calendar'></div>
            </div>
        </div>
    </div>
    <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}" />
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Or Delete Book</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div id="errorUpdate"></div>
                        <div class="form-group">
                            <form id="formBooking" action="{{route('updateBooking')}}" method="post">
                                <input type="hidden" id="idBooking" name="idBooking" value="">
                                <input type="hidden" id="idUserOfBook" name="idUserOfBook" value="">
                                <input type="hidden" id="dayDeleteBooking" name="dayDeleteBooking" value="">
                                <input type="hidden" id="hourStartDeleteBooking" name="hourStartDeleteBooking" value="">
                                <input type="hidden" id="hourEndDeleteBooking" name="hourEndDeleteBooking" value="">
                                <input type="hidden" id="typeBooking" name="typeBooking" value="">
                                <div class="form-group">
                                    <label for="description" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="description" name="description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="day" class="col-form-label">Day:</label>
                                    <input type="text" class="form-control" id="day" name="day">
                                </div>
                                <div class="form-group">
                                    <label for="hourStart" class="col-form-label">Hour Start:</label>
                                    <input type="text" class="form-control" id="hourStart" name="hourStart">
                                </div>
                                <div class="form-group">
                                    <label for="hourEnd" class="col-form-label">Hour End:</label>
                                    <input type="text" class="form-control" id="hourEnd" name="hourEnd">
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <div id="authentication">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success ml-2" id="bookingChange" name="bookingChange">change</button>
                        <hr>
                        <div class="form-group">
                            <label for="cycleUpdateOrDeleteBooking" class="col-form-label">Cycle Delete:</label>
                            <select class="custom-select mr-sm-2" id="cycleUpdateOrDeleteBooking" name="cycleUpdateOrDeleteBooking">
                                <option value="cycleSingle">Cycle Single</option>
                                <option value="cycleDay">Cycle Day</option>
                                <option value="cycleWeek">Cycle Week</option>
                            </select>
                        </div>
                        <button type="button" class="btn btn-warning ml-2" id="bookingDelete" name="bookingDelete">delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{--modal change password--}}
    <div class="modal fade" id="modalChangePas" tabindex="-1" role="dialog" aria-labelledby="modalChangePasLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Change Password</h5>
                    {{--<h5 class="modal-title" id="exampleModalLabel"></h5>--}}
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        <div class="form-group">
                            <form  id="formChangePassword" method="POST" action="{{ route('changePassword') }}">
                                {{ csrf_field() }}
                                <strong style="color: red;" id="messChangePass"></strong>
                                @if(empty(!Auth::user()->password))
                                    <div class="form-group">
                                        <label for="passwordOld" class="control-label">Current Password :</label>
                                        <div class="col-md-12">
                                            <input id="passwordOld" type="password" class="form-control" name="passwordOld" required>
                                        </div>
                                    </div>
                                @endif
                                <div class="form-group">
                                    <label for="passwordNew" class="control-label">New Password :</label>
                                    <div class="col-md-12">
                                        <input id="passwordNew" type="password" class="form-control" name="passwordNew" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="confirmPassword" class="control-label">Confirm New Password :</label>
                                    <div class="col-md-12">
                                        <input id="confirmPassword" type="password" class="form-control" name="confirmPassword" required>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" id="submitChangePassword" class="btn btn-primary">Change Password</button>
                </div>
            </div>
        </div>
    </div>
    {{--modal create--}}
    <div class="modal fade" id="modalCreateBooking" tabindex="-1" role="dialog" aria-labelledby="modalCreateBookingLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalCreateBooking">Create Booking</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <form id="formBooking" action="{{route('updateBooking')}}" method="post">
                                <div id="errorCreate"></div>
                                <input type="hidden" class="form-control" id="dayCreate" name="dayCreate">
                                <input type="hidden" class="form-control" id="hourStartCreate" name="hourStartCreate">
                                <input type="hidden" class="form-control" id="hourEndCreate" name="hourEndCreate">
                                <div class="form-group">
                                    <label for="descriptionCreate" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="descriptionCreate" name="descriptionCreate" required></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="day" class="col-form-label">Room:</label>
                                    <select class="custom-select mr-sm-2" id="roomIdCreate" name="roomIdCreate">
                                        @foreach($rooms as $room)
                                        <option style="background-color: {{$room->color}}" value="{{$room->id}}">{{$room->display_name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="day" class="col-form-label">Cycle:</label>
                                    <select class="custom-select mr-sm-2" id="cycleCreateBooking" name="cycleCreateBooking">
                                        <option value="cycleSingle">Cycle Single</option>
                                        <option value="cycleDay">Cycle Day</option>
                                        <option value="cycleWeek">Cycle Week</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                                        <div class="card card-body">
                                            <div class="form-group">
                                                <label for="dateStartCreate" class="col-form-label">Date Start:</label>
                                                <input type="date" class="form-control" id="dateStartCreate" name="dateStartCreate">
                                            </div>
                                            <div class="form-group">
                                                <label for="dateEndCreate" class="col-form-label">Date End:</label>
                                                <input type="date" class="form-control" id="dateEndCreate" min="2018-07-23">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" id="bookingCreate" class="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    </div>
@endsection
