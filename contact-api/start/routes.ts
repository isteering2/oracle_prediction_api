/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import FormController from '../app/Controllers/form_controller.js'

router.get('/', async () => {
  return { message: 'Contact API' }
})

router.post('/submit-form', [FormController, 'submit'])