const express = require("express");
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index"); // Renderizará o arquivo "./views/index.ejs"
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));

let cadastros = {nomes: "Darlleson", senhas: "Password"};
let cadastrosCheck = cadastros.nomes;

let teste = {nomes: "Darlleson", senhas: "Password"};
let testeCheck = teste.nomes;

if (cadastrosCheck === testeCheck) {
    console.log("OK")
}
else {
    console.log("Isn't OK")
}
