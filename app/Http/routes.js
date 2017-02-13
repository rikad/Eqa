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


Route.get('/rikad/:id', function * (request, response) {
  const id = request.param('id')
  response.send('This is the home page $' + id)
})



Route.group('PO', function () {
  Route.resource('organizations','OrganizationController')
}).prefix('api/v1')
