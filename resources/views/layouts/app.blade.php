<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Broom Server</title>
    <link rel="icon" href="/images/favicon.png">
    <!-- CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <script src=" https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
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
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="{{ mix('/js/all.js') }}"></script>
    <script src="{{ mix('/js/home.js')}}"></script>
</body>
</html>
