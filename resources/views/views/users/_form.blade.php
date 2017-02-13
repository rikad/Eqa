<div class="form-group {{ $errors->has('no_induk') ? 'has-error' : ''}}">
	{!! Form::label('no_induk', 'NIP/NOPEG/NIM', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::number('no_induk', null, ['class'=>'form-control']) !!}
		{!! $errors->first('no_induk', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
	{!! Form::label('name', 'Name', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('name', null, ['class'=>'form-control']) !!}
		{!! $errors->first('name', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('email') ? 'has-error' : ''}}">
	{!! Form::label('email', 'Email', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::email('email', null, ['class'=>'form-control']) !!}
		{!! $errors->first('email', '<p class="help-block">:message</p>') !!}
	</div>
</div>


<div class="form-group {{ $errors->has('password') ? 'has-error' : ''}}">
	{!! Form::label('password', 'Password', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::password('password', ['class'=>'form-control']) !!}
		{!! $errors->first('password', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('phone') ? 'has-error' : ''}}">
	{!! Form::label('phone', 'No Telephone', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('phone', null, ['class'=>'form-control']) !!}
		{!! $errors->first('phone', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('role') ? 'has-error' : ''}}">
	{!! Form::label('role', 'role', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('role', [''=>'']+DB::table('roles')->pluck('name','id')->all(), null, ['onchange'=>'show_hide_mahasiswa(this.value)','class' => 'js-selectize', 'placeholder'=>'Pilih role'] ) !!}
		{!! $errors->first('role', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div id="a" style="display:none" class="form-group {{ $errors->has('pembimbing') ? 'has-error' : ''}}">
	{!! Form::label('pembimbing', 'Pembimbing', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('pembimbing', ['0'=>'']+App\User::pluck('name','id')->all(), null, ['id'=>'c','class' => 'js-selectize', 'placeholder'=>'Pilih Pembimbing'] ) !!}
		{!! $errors->first('pembimbing', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div id="b" style="display:none" class="form-group {{ $errors->has('lokasi_pratikum') ? 'has-error' : ''}}">
	{!! Form::label('lokasi_pratikum', 'lokasi_pratikum', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('lokasi_pratikum', ['0'=>'']+App\Ruangan::pluck('nama','id')->all(), null, ['id'=>'d','class' => 'js-selectize', 'placeholder'=>'Pilih lokasi_pratikum'] ) !!}
		{!! $errors->first('lokasi_pratikum', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group">
	<div class="col-md-4 col-md-offset-2">
		{!! Form::submit('Simpan', ['class'=> 'btn btn-primary']) !!}
	</div>
</div>

<script>
	function show_hide_mahasiswa(id) {
		if (id == 4) {
			document.getElementById("a").style.display = "block";
			document.getElementById("b").style.display = "block";
		}
		else {
			document.getElementById("a").style.display = "none";
			document.getElementById("b").style.display = "none";

			document.getElementById("c").selectedIndex = 0;
			document.getElementById("d").selectedIndex = 0;
		}
	}
</script>