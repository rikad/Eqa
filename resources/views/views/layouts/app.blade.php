<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <!-- <link href="/laravel/css/app.css" rel="stylesheet"> -->
    <link href="/laravel/css/bootstrap.min.css" rel="stylesheet">
    <link href="/laravel/css/jquery.dataTables.css" rel="stylesheet">

    <link href="/laravel/css/selectize.css" rel="stylesheet">
    <link href="/laravel/css/selectize.bootstrap3.css" rel="stylesheet">
    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    <li><a href="{{ url('/home') }}">Home</a></li>
                    @role('administrator')
                    <li><a href="{{ route('barang.index') }}">Barang</a></li>
                    <li><a href="{{ route('ruangan.index') }}">Ruangan</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            Users <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="{{ url('/admin/users/menu/1') }}">Admin</a></li>
                            <li><a href="{{ url('/admin/users/menu/2') }}">Dosen Pengajar</a></li>
                            <li><a href="{{ url('/admin/users/menu/3') }}">Tenaga Kependidikan</a></li>
                            <li><a href="{{ url('/admin/users/menu/4') }}">Mahasiswa</a></li>
                        </ul>
                    </li>
                    @endrole
                    &nbsp;
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                        <li><a href="{{ url('/register') }}">Register</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="{{ url('/logout') }}"
                                        onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>

                                    <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>

    @include('layouts._flash')
    @yield('content')

    <!-- Scripts -->
    <script src="/laravel/js/jquery.js"></script>
    <script src="/laravel/js/bootstrap.min.js"></script>

    <script src="/laravel/js/jquery.dataTables.min.js"></script>

    <script src="/laravel/js/selectize.min.js"></script>

    <script src="/laravel/js/custom.js"></script>

    @yield('scripts')

</body>
</html>
