import Route from '@ioc:Adonis/Core/Route'
import FormController from 'App/Controllers/Http/FormController'

Route.post('/submit', 'FormController.submit')