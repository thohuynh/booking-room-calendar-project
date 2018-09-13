
@if (session('mess-success'))
    <div class="alert alert-success ">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>success</strong>
    </div>
@endif
@if (session('mess-error'))
    <div class="alert alert-danger ">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>{{Session('mess-error')}}</strong>
    </div>
@endif