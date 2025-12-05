import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FormController {
  public async submit({ request, response }: HttpContextContract) {
    const formData = request.only(['name', 'email', 'sujet', 'message'])

    return response.json({
      success: true,
      data: formData,
      message: 'Formulaire reçu !',
    })
  }
}