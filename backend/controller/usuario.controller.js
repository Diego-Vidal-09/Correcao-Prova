const Usuario = require('../models/Usuario')

const cadastrar = async(req,res)=>{
    const valores = req.body
    console.log(valores)

    if(!valores.nome || !valores.email || !valores.cpf || !valores.telefone){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    try{
        await Usuario.create(valores)
        res.status(201).json({message:'Usuario cadastrado com sucesso!'})
    }catch(err){
        console.error('Erro ao cadastrar o usuario!',err)
        res.status(500).json({message:'Erro ao cadastrar o usuario!'})
    }
}

const consultar = async(req,res)=>{
    const id = req.params.id
        try{
    const dados = await Usuario.findByPk(id)
         res.status(200).json('Usuario encontrado com sucesso!')
        if(!dados){
             res.status(404).json({message: 'Usuario não foi encontrado'})
        }else{
             res.status(200).json(dados)
        }   
        }catch(err){
            console.error('Erro ao consultar o usuario',err)
            res.status(500).json({message:'Erro ao consultar o usuario'})
    }
}
const listar = async(req,res)=>{
    try{
        const dados =  await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar os usuarios',err)
        res.status(500).json({message:'Erro ao listar o usuarios'})
    }
}
const atualizar = async(req,res)=>{
    const id = req.params.id
    const valores = req.body
    try{
        let dados = await Usuario.findByPk(id)
        if(!dados){
            res.status(404).json({message:'Usuario não encontrado no banco de dados!'})
        }else{
            await Usuario.update(valores,{ where: { codUsuario: id}})
            dados = await Usuario.findByPk(id)
            res.status(200).json(dados)
        }
    }catch(err){
        console.error('Não foi possível atualizar o usuario',err)
        res.status(500).json({message:'Não foi possível atualizar o usuario'})
    }
}
const apagar = async(req,res)=>{
    const id = req.params.id
    try{
        const dados = await Usuario.findByPk(id)
        if(!dados){
            res.status(404).json({message:'Usuario não encontrado no banco de dados!'})
        }else{
            await Usuario.destroy({ where: { codUsuario: id}})
            res.status(200).json({message:' Usuario destruido com sucesso'})
        }
    }catch(err){
        console.error('Não foi possível destruir o usuario',err)
        res.status(500).json({message:'Não foi possível destruir o usuario'})
    }
}

module.exports = {cadastrar, consultar, listar, atualizar, apagar}