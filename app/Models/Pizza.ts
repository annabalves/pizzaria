import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pizza extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public sabor: String
  
  @column()
  public valor: String

  @column()
  public tamanho: String
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
