const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')

const PORT = 3000
const hostname = 'localhost'

const usuarioController = require('./controller/usuario.controller')
const sucoController = require('./controller/suco.controller')
//-----------MiddleWare--------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//------------------------------------
app.get('/', (req, res) => {
    res.status(200).json({message:'Servidor funcionando!'})
})

app.post('/Usuario', usuarioController.cadastrar)
app.get('/Usuario', usuarioController.consultar)
app.get('/Usuario', usuarioController.listar)
app.get('/Usuario', usuarioController.atualizar)
app.delete('/Usuario', usuarioController.apagar)

app.post('/Suco', sucoController.cadastrar)

//----------Server--------------------
conn.sync()
    .then(()=>{
        app.listen(PORT,hostname,()=>{
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('Erro ao conectar com o servidor',err)
    })