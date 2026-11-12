const Suco = require('../models/Suco')

const cadastrar = async(req,res)=>{
    const valores = req.body
    console.log(valores)

    if(!valores.sabor || !valores.volume || !valores.quantidade || !valores.preco){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    try{
        await Suco.create(valores)
        res.status(201).json({message:'Suco cadastrado com sucesso!'})
    }catch(err){
        console.err('Erro ao cadastrar o suco!',err)
        res.status(500).json({message:'Erro ao cadastrar o suco!'})
    }
}

module.exports = {cadastrar}