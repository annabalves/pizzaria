import { schema, CustomMessages} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PizzaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    sabor: schema.string(),
    valor: schema.number(),
    tamanho: schema.string()
  })

 
  public messages: CustomMessages = {}
}
