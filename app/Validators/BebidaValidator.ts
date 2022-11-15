import { schema, CustomMessages} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BebidaValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    tipo: schema.number(),
    marca: schema.string(),
    tamanho: schema.string()
  })

  
  public messages: CustomMessages = {}
}
