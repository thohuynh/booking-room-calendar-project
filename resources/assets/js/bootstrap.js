window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');
let token = document.head.querySelector('meta[name="csrf-token"]');
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': token.content
  }
});

import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  namespace: 'App.Events',
  broadcaster: 'pusher',
  key: 'ea4c1db20cea941f0651',
  cluster: 'ap1',
  encrypted: true
});