import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {
  public async all(ctx: HttpContextContract) {
    return ctx.response.send(
      [
        {
          id: 1,
          full_name: 'Jhon Doe',
          rule_id: 1
        },
        {
          id: 2,
          full_name: 'Jane Doe',
          rule_id: 1
        },
        {
          id: 3,
          full_name: 'James Hatfield',
          rule_id: 2
        },
      ]
    )
  }

  public async create(ctx: HttpContextContract) {
    await Database.table('users').insert(ctx.request.body())
    return 'User created'
  }
}
