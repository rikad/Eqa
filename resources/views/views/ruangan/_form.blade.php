<div class="form-group {{ $errors->has('kode_itb') ? 'has-error' : ''}}">
	{!! Form::label('kode_itb', 'Kode ITB', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('kode_itb', null, ['class'=>'form-control']) !!}
		{!! $errors->first('kode_itb', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('kode_prodi') ? 'has-error' : ''}}">
	{!! Form::label('kode_prodi', 'Kode Prodi', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('kode_prodi', null, ['class'=>'form-control']) !!}
		{!! $errors->first('kode_prodi', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('nama') ? 'has-error' : ''}}">
	{!! Form::label('nama', 'Nama', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('nama', null, ['class'=>'form-control']) !!}
		{!! $errors->first('nama', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('teknisi_id') ? 'has-error' : ''}}">
	{!! Form::label('teknisi_id', 'Teknisi', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('teknisi_id', [''=>'']+App\User::pluck('name','id')->all(), null, ['class' => 'js-selectize', 'placeholder'=>'Pilih Teknisi'] ) !!}
		{!! $errors->first('teknisi_id', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group">
	<div class="col-md-4 col-md-offset-2">
		{!! Form::submit('Simpan', ['class'=> 'btn btn-primary']) !!}
	</div>
</div>