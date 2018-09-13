
@extends('layouts.app')
@section('content')

@if ($errors->any())
<!-- form bao error -->
<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <br><br>
    <ul>
        @foreach ($errors->all() as $error)
        <li>{{$error}}</li>
        @endforeach
    </ul>
</div>
@endif

<div class="container">
    <div class="row pt-5" >
        <div class="col-12" style="height: 800px; background-color: #ABB7B7;">
            <div class="row">
                <div class="col-6 " style="height: 800px;">
                    <div class="row" style="padding-top: 350px; padding-left: 80px;">
                        <div class="col-12">
                            <h1 style="font-family: 'Permanent Marker', cursive;">
                                Meeting room management</h1>
                        </div>
                    </div>
                </div>
                <div class="col-6" style="background-color: #DADFE1;">
                    <div class="row" style="padding-top: 200px; padding-left: 50px;">
                        <div class="col-12" >
                            <div style="font-size:5em; color:#ff3f2b"><i class="fas fa-broom"></i></div>
                            <h1 style="font-family: 'Gochi Hand', cursive;"> Welcome</h1>
                        </div>
                    </div>
                    <div class="row" style="padding-top: 50px;">
                        <div class="col-12">
                            <form action="{{route('postLogin')}}" method="post">
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label" style="font-family: 'Permanent Marker', cursive;">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" id="email" name="email" style="background-color:#DADFE1; " class="form-control border-top-0 border-right-0  border-left-0" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword3" class="col-sm-2 col-form-label " style="font-family: 'Permanent Marker', cursive;">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" id="password" name="password" style="background-color:#DADFE1; " class="form-control border-top-0 border-right-0  border-left-0" >
                                    </div>
                                </div>
                                <div class="form-group row pl-5">
                                    @if (Session::has('slack_token'))
                                        <label for="aaa" class="col-sm-2 col-form-label" style="font-family: 'Caveat', cursive;">With ?</label>
                                        <a href="{{route('home')}}" class="" id="aaa">
                                            <div style="font-size:2em; color:#ff3f2b">
                                                <i class="fab fa-slack">  Slack</i>
                                            </div>
                                        </a>
                                    @elseif (!Session::has('slack_token'))
                                    <label for="aaa" class="col-sm-2 col-form-label" style="font-family: 'Caveat', cursive;">With ?</label>
                                    <a href="https://slack.com/oauth/authorize?scope=identity.basic,identity.team,identity.email,identity.avatar&client_id={{ config('services.slack.client_id') }}" class="" id="aaa">
                                        <div style="font-size:2em; color:#ff3f2b">
                                            <i class="fab fa-slack">  Slack</i>
                                        </div>
                                    </a>
                                    @endif
                                </div>
                                {!! csrf_field() !!}
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-primary" style="font-family: 'Gochi Hand', cursive;">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
