@extends('layouts.app')
@section('content')
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<ul class="breadcrumb">
					<li><a href="{{ url('/home') }}">Dashboard</a></li>
					<li class="active">Reservations</li>
				</ul>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h2 class="panel-title">Reservations</h2>
					</div>
					<div class="panel-body">
						<p> <a class="btn btn-primary" href="{{ route('reservations.create') }}">Tambah</a> </p>
						{{ json_encode($data) }}

						@foreach ($data as $flight)
					    {{ $flight->name }}
					    @endforeach
					</div>
				</div>
			</div>
		</div>
	</div>


@endsection