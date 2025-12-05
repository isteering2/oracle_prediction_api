import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

export default class FormController {
  public async submit({ request, response }: HttpContext) {
    // Validation des données avec Vine
    const schema = vine.object({
      name: vine.string().trim().minLength(3),
      email: vine.string().email(),
      sujet: vine.string().trim().minLength(5),
      message: vine.string().trim().minLength(10),
    })

    try {
      const formData = await vine.validate({
        data: request.all(),
        schema: schema,
      })

      return response.json({
        success: true,
        data: formData,
        message: 'Formulaire reçu avec succès!',
      })
    } catch (error) {
      return response.status(422).json({
        success: false,
        message: 'Erreur de validation',
        errors: error.messages,
      })
    }
  }
}