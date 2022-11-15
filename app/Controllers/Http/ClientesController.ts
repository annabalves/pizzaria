// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"


export default class ClientesController {
    index(){
        return Cliente.all()
    }

    async store({request}){
        const dados = await request.validate(ClienteValidator)
        return Cliente.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Cliente.findOrFail(id)
    }

    async update({request}){
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)
        const dados = request.only([
            'nome',
            'cpf',
            'telefone',
            'endereco'
        ])
        return cliente.merge(dados).save()
    }

    async destroy({request}){
        const id = request.param('id')
        const bebida = await
        Cliente.findOrFail(id)
        return bebida.delete()
    }
}
