import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pizza from 'App/Models/Pizza'

export default class extends BaseSeeder {
  public async run () {
    await Pizza.createMany([
      {sabor:'portuguesa', valor:'30 reais', tamanho: 'grande'}
    ])
  }
}
