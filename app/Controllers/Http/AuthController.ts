import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async auth(ctx: HttpContextContract) {
    const { username, password } = ctx.request.body()

    try {
      const token = await ctx.auth.use('api').attempt(username, password)
      ctx.response.send(token)
    } catch {
      return ctx.response.unauthorized('Invalid credentials')
    }
  }
}
