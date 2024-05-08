import express from "express";
import cors from "cors";
import {con} from "./config/database.js";


const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.get("/olamundo", function(req, res){
    res.status(200).send("Olá Mundo! Eu me chama servidor node.js");
});

app.get("/produtos", function(rec, res){
    con.query('select * from produto', function(err, result){
        if (err)
            return res.status(500).send("Ocorreu um erro: " + err.message);
        else
            return res.status(200).json(result);
    })
});


//Levantar o servidor 
app.listen(3001, function(){
    console.log("Servidor executado na porta 3001");
});