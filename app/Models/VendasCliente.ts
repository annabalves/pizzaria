import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VendasCliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public venda_id: Number

  @column()
  public clientes_id: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
