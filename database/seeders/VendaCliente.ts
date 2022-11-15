import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VendasCliente from 'App/Models/VendasCliente'

export default class extends BaseSeeder {
  public async run () {
    await VendasCliente.createMany([
      {venda_id: 2, clientes_id: 4 }
    ])
  }
}
