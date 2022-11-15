import { schema, CustomMessages, rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    quantidadeProduto: schema.string(),
    valorTotal: schema.string(),
    bebidasId: schema.number([rules.exists({table: 'bebida', column: 'id'})]),
    pizzasId: schema.number([rules.exists({table: 'pizza', column: 'id'})]),
  })

 
  public messages: CustomMessages = {}
}
