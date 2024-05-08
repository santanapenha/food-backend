import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.get("/olamundo", function(req, res){
    res.status(200).send("Olá Mundo! Eu me chama servidor node.js");
});

//Levantar o servidor 
app.listen(3001, function(){
    console.log("Servidor executado na porta 3001");
});