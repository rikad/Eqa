@extends('layouts.app')
@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<ul class="breadcrumb">
				<li><a href="{{ url('/home') }}">Dashboard</a></li>
				<li><a href="{!! route('reservations.index') !!}">Reservations</a></li>
				<li class="active">Tambah Reservations</li>
			</ul>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h2 class="panel-title">Tambah Reservations</h2>
				</div>

				<div class="panel-body">
					{!! Form::open(['url' => route('reservations.store'), 'method' => 'post', 'class'=>'form-horizontal']) !!}
						@include('reservations._form')
					{!! Form::close() !!}
				</div>
			</div>
		</div>
	</div>
</div>
@endsection