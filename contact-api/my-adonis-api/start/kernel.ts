import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Kernel {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // Add your middleware logic here

    await next()
  }
}