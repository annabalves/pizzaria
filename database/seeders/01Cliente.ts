import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome:'anna', CPF:'123.456.789-10', telefone:99999-9999, endereco: 'qnm 06' }
    ])
  }
}
