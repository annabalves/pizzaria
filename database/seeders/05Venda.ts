import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
      {quantidadeproduto: '50', valortotal:'10.000', bebidas_id: 1, pizzas_id: 3, funcionario_id: 2}
    ])
  }
}
