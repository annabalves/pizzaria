// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Bebida from "App/Models/Bebida";
import BebidaValidator from "App/Validators/BebidaValidator";


export default class BebidasController {
    index(){
        return Bebida.all()
    }

    async store({request}){
        const dados = await request.validate(BebidaValidator)
        return Bebida.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Bebida.findOrFail(id)
    }

    async update({request}){
        const id = request.param('id')
        const bebida = await Bebida.findOrFail(id)
        const dados = request.only([
            'tipo',
            'marca',
            'tamanho'
        ])
        return bebida.merge(dados).save()
    }

    async destroy({request}){
        const id = request.param('id')
        const bebida = await
        Bebida.findOrFail(id)
        return bebida.delete()
    }

}
