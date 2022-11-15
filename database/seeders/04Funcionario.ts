import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome: "Jubileu", CPF: 123, telefone: 123456789, endereco: 'qnp 20-Conj 60-Lote 40'},
    ])
  }
}
