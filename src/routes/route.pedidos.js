import {Router} from "express";
import {con, query} from "../config/database.js";

const routePedido = Router();

routePedido.post("/pedidos", function(req, res){
    let sql = `insert into pedido(id_usuario, nome, email, telefone, 
               end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total)
               value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let p = req.body;

    con.query(sql, [p.id_usuario, p.nome, p.email, p.telefone, 
              p.end_logradouro, p.end_numero, p.end_bairro, p.end_cidade, p.end_uf, p.cep, p.total], 
              async function(err, result){
                if(err)
                    return res.status(500).send('Ocorreu um erro: ' + err.message);
                else{
                    let id_pedido = result.insertId;

                    //Itens Pedido
                    for (let item of req.body.itens){
                        sql = 'insert into pedido_item(id_pedido, id_produto, quantidade, valor_unitari)values (?, ?, ?, ?)';

                        await query(sql, [id_pedido, item.id_produto, item.quantidade, item.valor_unitario]);
                    }

                    return res.status(201).json(result);
                }
                    
    });
});

export default routePedido;