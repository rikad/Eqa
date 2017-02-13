
<div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
	{!! Form::label('name', 'name', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('name', null, ['class'=>'form-control']) !!}
		{!! $errors->first('name', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('phone') ? 'has-error' : ''}}">
	{!! Form::label('phone', 'phone', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::number('phone', null, ['class'=>'form-control']) !!}
		{!! $errors->first('phone', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('email') ? 'has-error' : ''}}">
	{!! Form::label('email', 'email', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::email('email', null, ['class'=>'form-control']) !!}
		{!! $errors->first('email', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('checkin') ? 'has-error' : ''}}">
	{!! Form::label('checkin', 'checkin', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('checkin', null, ['class'=>'form-control']) !!}
		{!! $errors->first('checkin', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('checkout') ? 'has-error' : ''}}">
	{!! Form::label('checkout', 'checkout', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('checkout', null, ['class'=>'form-control']) !!}
		{!! $errors->first('checkout', '<p class="help-block">:message</p>') !!}
	</div>
</div>


<div class="form-group {{ $errors->has('room_id') ? 'has-error' : ''}}">
	{!! Form::label('room_id', 'room', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('room_id', [''=>'']+DB::table('rooms')->pluck('rooms.kode','rooms.id')->all(), null, ['class' => 'js-selectize', 'placeholder'=>'Pilih room'] ) !!}
		{!! $errors->first('room_id', '<p class="help-block">:message</p>') !!}
	</div>
</div>


<div class="form-group">
	<div class="col-md-4 col-md-offset-2">
		{!! Form::submit('Simpan', ['class'=> 'btn btn-primary']) !!}
	</div>
</div>