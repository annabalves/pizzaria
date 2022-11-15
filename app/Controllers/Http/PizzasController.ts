// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pizza from "App/Models/Pizza"
import PizzaValidator from "App/Validators/PizzaValidator"

export default class PizzasController{
    index(){
        return Pizza.all()
    }

    async store({request}){
        const dados = await request.validate(PizzaValidator)
        return Pizza.create(dados)
    }

    show({request}){
        const id = request.param('id')
        return Pizza.findOrFail(id)
    }

    async update({request}){
        const id = request.param('id')
        const pizza = await Pizza.findOrFail(id)
        const dados = request.only([
            'sabor',
            'valor',
            'tamanho'
        ])
        return pizza.merge(dados).save()
    }

    async destroy({request}){
        const id = request.param('id')
        const pizza = await
        Pizza.findOrFail(id)
        return pizza.delete()
    }
}

