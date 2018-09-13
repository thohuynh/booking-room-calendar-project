<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Broom Server</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://unpkg.com/ionicons@4.2.4/dist/css/ionicons.min.css" rel="stylesheet">
    <!-- CSS -->
    <link rel="stylesheet" href="{{ mix('admin/css/admin-vendor.css') }}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <!-- Google Font -->
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

    <header class="main-header">
        <!-- Logo -->
        <a href="{{route('admin')}}" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>B</b>S</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin </b>Broom Server</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="{{Auth::user()->images}}" class="user-image" alt="User Image">
                            <span class="hidden-xs">{{Auth::user()->name}}</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- Uimagesmage -->
                            <li class="user-header">
                                <img src="{{Auth::user()->images}}" class="img-circle" alt="User Image">

                                <p>
                                    {{Auth::user()->name}} - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <li class="user-body">
                                <!-- /.row -->
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="{{route('home')}}" class="btn btn-default btn-flat">Go Home User Page</a>
                                </div>
                                <div class="pull-right">
                                    <a href="{{route('logout')}}" class="btn btn-default btn-flat">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <!-- Control Sidebar Toggle Button -->
                </ul>
            </div>
        </nav>
    </header>
    <!-- =============================================== -->

    <!-- Left side column. contains the sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="{{Auth::user()->images}}" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>{{Auth::user()->name}}</p>
                </div>
            </div>
            {{--<!-- search form -->--}}
            {{--<form action="#" method="get" class="sidebar-form">--}}
                {{--<div class="input-group">--}}
                    {{--<input type="text" name="q" class="form-control" placeholder="Search...">--}}
                    {{--<span class="input-group-btn">--}}
                {{--<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>--}}
                {{--</button>--}}
              {{--</span>--}}
                {{--</div>--}}
            {{--</form>--}}
            {{--<!-- /.search form -->--}}
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">MAIN NAVIGATION</li>
                <li class="">
                    <a href="{{route('admin')}}">
                        <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                    </a>
                </li>
                <li class="user-menu treeview ">
                    <a href="#">
                        <i class="fa fa-users"></i>
                        <span>User Management</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="user-menu-info treeview-menu">
                        <li><a href="{{route('user.index')}}"><i class="fa fa-circle-o"></i> User List</a></li>
                    </ul>
                </li>

                <li class="role-menu treeview">
                    <a href="#">
                        <i class="fa fa-legal"></i>
                        <span>Role Management</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="role-menu-info treeview-menu ">
                        <li><a href="{{route('role.index')}}"><i class="fa fa-circle-o"></i> Role List</a></li>
                        <li><a href="{{route('role.create')}}"><i class="fa fa-circle-o"></i> Create Role</a></li>
                    </ul>
                </li>

                <li class="room-menu treeview">
                    <a href="#">
                        <i class="fa  fa-hotel "></i>
                        <span>Room Management</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="room-menu-info treeview-menu">
                        <li><a href="{{route('room.index')}}"><i class="fa fa-circle-o"></i> Room List</a></li>
                        <li><a href="{{route('room.create')}}"><i class="fa fa-circle-o"></i> Create Room</a></li>
                    </ul>
                </li>

                <li class="booking-menu treeview">
                    <a href="#">
                        <i class="fa  fa-calendar-check-o"></i>
                        <span>Booking Management</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                    <ul class="booking-menu-info treeview-menu">
                        <li><a href="{{route('booking.index')}}"><i class="fa fa-circle-o"></i> Booking List</a></li>
                    </ul>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- =============================================== -->
    <!-- Content Wrapper. Contains page content -->
    @yield('content')
    <!-- Control Sidebar -->
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
</div>

<!-- Javascript -->
<script src="{{ mix('admin/js/admin-vendor.js') }}"></script>
<script src="{{ mix('admin/js/adminAll.js') }}"></script>
</body>
</html>
