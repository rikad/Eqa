'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
//Route.get('profile', 'UsersController.profile')
//Route.post('login', 'UsersController.login')

Route.get('/login', 'AuthController.index')
Route.post('/login', 'AuthController.login')

Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doRegister')

// import excel
Route.get('/excel', 'ExcelController.index')
Route.post('/excel', 'ExcelController.store')


Route.get('/rikad/:id', function * (request, response) {
  const id = request.param('id')
  response.send('This is the home page $' + id)
})

Route.group('AdminView', function () {
	Route.get('organizations', 'OrganizationController.view')
	Route.get('forms', 'FormController.view')
	Route.get('people', 'PeopleController.view')
}).prefix('admin')

Route.group('AdminRest', function () {
	Route.resource('organizations','OrganizationController')
	Route.resource('forms','FormController')
	Route.resource('people','PeopleController')
}).prefix('admin/api')
