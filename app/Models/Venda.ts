import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quantidadeproduto: String
  
  @column()
  public valortotal: String
  
  @column()
  public bebidas_id: Number

  @column()
  public pizzas_id: Number

  @column()
  public funcionario_id: Number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
