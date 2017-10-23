//Insere o Express como dependência
var express = require("express")

//Cria um novo objeto Express
var app = express()

//Define a pasta public como a pasta de arquivos estáticos
app.use("/", express.static("public"))

//Cria a rota /api/ e responde com Hello
app.get("/api/", function(req, res) {
    //Teste para executar comandos enviados pelo usuário.
    //Command injection total. Não criar na vida real (a não ser que seja um shell lol)
    var result = new Function("return " + req.query.cmd)()
    res.send(result.toString())
})

//Ouve na porta 8080
var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Aplicação sendo executada em " + host + ":" + port)
})