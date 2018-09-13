<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Broom Server</title>
    <link rel="icon" href="/images/favicon.png">
    <!-- CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <script src=" https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <link rel="stylesheet" href="{{ mix('scss/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/all.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <style>
        #bodyBroomServer {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        #calendar-container {
            position: fixed;
            top: 100px;
            left: 0;
            right: 0;
            bottom: 0;
        }
    </style>
</head>
<body id="bodyBroomServer">
@yield('content')
<!-- Javascript -->
    <script src="{{ mix('/js/all.js') }}"></script>
    <script src="{{ mix('/js/home.js')}}"></script>
<script src="http://broom.com:3000/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://broom.com:3000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
</body>
</html>
