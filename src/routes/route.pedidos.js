import {Router} from "express";
import {con} from "../config/database.js";

const routePedido = Router();

routePedido.post("/pedidos", function(req, res){
    let sql = `insert into pedido(id_usuario, nome, email, telefone, 
               end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total)
               value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,)`;
    let p = req.body;

    con.query(sql, [p.id_usuario, p.nome, p.email, p.telefone, 
              p.end_logradouro, p.end_numero, p.end_bairro, p.end_cidade, p.end_uf, p.cep, p.total], 
              function(err, result){
                if(err)
                    return res.status(500).send('Ocorreu um erro: ' + err.message);
                else
                    return res.status(200).json(result);
    });
});

export default routePedido;