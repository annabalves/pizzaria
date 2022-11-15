import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendasClienteValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    clientesId: schema.number([
      rules.exists({table: 'clientes', column: 'id'}),
    ]),
    VendaId: schema.number([
      rules.exists({table: 'Vendas', column: 'id'})
    ])

  })


  public messages: CustomMessages = {}
}
