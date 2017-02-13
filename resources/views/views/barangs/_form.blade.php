<div class="form-group {{ $errors->has('nama') ? 'has-error' : ''}}">
	{!! Form::label('nama', 'Nama', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('nama', null, ['class'=>'form-control']) !!}
		{!! $errors->first('nama', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('merk') ? 'has-error' : ''}}">
	{!! Form::label('merk', 'Merk', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::text('merk', null, ['class'=>'form-control']) !!}
		{!! $errors->first('merk', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('gambar') ? 'has-error' : ''}}">
	{!! Form::label('gambar', 'Gambar', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::file('gambar') !!}
			@if(isset($item) && $item->gambar)
			<p>{!! Html::image(asset('img/barang/'.$item->gambar), null, ['class' => 'img-rounded','img-responsive']) !!}</p>
			@endif
		{!! $errors->first('gambar', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('spesifikasi') ? 'has-error' : ''}}">
	{!! Form::label('spesifikasi', 'Spesifikasi', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::textarea('spesifikasi', null, ['class'=>'form-control']) !!}
		{!! $errors->first('spesifikasi', '<p class="help-block">:message</p>') !!}
	</div>
</div>


<div class="form-group {{ $errors->has('satuan_id') ? 'has-error' : ''}}">
	{!! Form::label('satuan_id', 'Satuan', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('satuan_id', [''=>'']+DB::table('satuan')->pluck('kode','id')->all(), null, ['class' => 'js-selectize', 'placeholder'=>'Pilih Satuan'] ) !!}
		{!! $errors->first('satuan_id', '<p class="help-block">:message</p>') !!}
	</div>
</div>


<div class="form-group {{ $errors->has('kategori') ? 'has-error' : ''}}">
	{!! Form::label('kategori', 'Kategori', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('kategori', ['1'=>'ASSET','0'=>'NON-ASSET'], null, ['class' => 'js-selectize', 'placeholder'=>'Pilih Kategori'] ) !!}
		{!! $errors->first('kategori', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group {{ $errors->has('klasifikasi_id') ? 'has-error' : ''}}">
	{!! Form::label('klasifikasi_id', 'Klasifikasi', ['class'=>'col-md-2 control-label']) !!}
	<div class="col-md-4">
		{!! Form::select('klasifikasi_id', [''=>'']+App\Klasifikasi::pluck('nama','id')->all(), null, ['class' => 'js-selectize', 'placeholder'=>'Pilih Klasifikasi'] ) !!}
		{!! $errors->first('klasifikasi_id', '<p class="help-block">:message</p>') !!}
	</div>
</div>

<div class="form-group">
	<div class="col-md-4 col-md-offset-2">
		{!! Form::submit('Simpan', ['class'=> 'btn btn-primary']) !!}
	</div>
</div>