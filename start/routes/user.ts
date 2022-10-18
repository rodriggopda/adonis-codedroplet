import Route from '@ioc:Adonis/Core/Route'

Route.get('/users', 'UsersController.all')
Route.post('/users', 'UsersController.create')