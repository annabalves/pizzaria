import { schema, CustomMessages, rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.string(),
    telefone: schema.string(),
    endereco: schema.string()
  })

  
  public messages: CustomMessages = {}
}
