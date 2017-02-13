@extends('layouts.app')
@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-12">
			<ul class="breadcrumb">
				<li><a href="{{ url('/home') }}">Dashboard</a></li>
				<li><a href="{!! route('barang.index') !!}">Barang</a></li>
				<li class="active">Ubah Barang</li>
			</ul>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h2 class="panel-title">Ubah Barang</h2>
				</div>

				<div class="panel-body">
					{!! Form::model($item, ['url' => route('barang.update', $item->id), 'files'=>true,'method'=>'put', 'class'=>'form-horizontal']) !!}
					@include('barangs._form')
					{!! Form::close() !!}
				</div>
			</div>
		</div>
	</div>
</div>
@endsection