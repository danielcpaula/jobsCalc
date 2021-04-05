const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando template engine
server.set('view engine', 'ejs')

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//Habilitar arquivos estatics
server.use(express.static("public"))

// Usando o req.body
server.use(express.urlencoded({extended: true}))

//Usando o arquivo de rotas
server.use(routes)


server.listen(3000, () => console.log('rodando'))