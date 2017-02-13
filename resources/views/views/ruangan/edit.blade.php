@extends('layouts.app')
@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<ul class="breadcrumb">
				<li><a href="{{ url('/home') }}">Dashboard</a></li>
				<li><a href="{!! route('ruangan.index') !!}">Ruangan</a></li>
				<li class="active">Ubah Ruangan</li>
			</ul>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h2 class="panel-title">Ubah Ruangan</h2>
				</div>

				<div class="panel-body">
					{!! Form::model($item, ['url' => route('ruangan.update', $item->id),'method'=>'put', 'class'=>'form-horizontal']) !!}
						@include('ruangan._form')
					{!! Form::close() !!}
				</div>
			</div>
		</div>
	</div>
</div>
@endsection