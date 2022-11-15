import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Bebida from 'App/Models/Bebida'

export default class extends BaseSeeder {
  public async run () {
    await Bebida.createMany([
      {tipo:'alcoolica', marca:'coca cola', tamanho: 'pequeno'}
    ])
  }
}
