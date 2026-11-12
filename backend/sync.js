const Usuario = require('./models/Usuario')
const conn = require('./db/conn')
async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log('Sincronizando')
    }catch(err){
        console.error('Erro ao sincronizar',err)
    }finally{
        await conn.close()
    }
}

syncDataBase()