<?php

namespace App\Listeners;

use App\Events\EventSendMailTest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class EventListenerSendMailTest
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  EventSendMailTest  $event
     * @return void
     */
    public function handle(EventSendMailTest $event)
    {
        //
    }
}
