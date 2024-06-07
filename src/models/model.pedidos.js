import {con, query} from "../config/database.js";

class PedidoModel {

    static getAllPedidos(callback) {
        let sql = `select * from pedido`;  
        
        con.query(sql, function(err, result) {
            if (err) {
            callback(err, null);
            } else {
            callback(null, result);
            }
        });
    }

    static createPedido(dados, callback) {
        let sql = `insert into pedido(id_usuario, nome, email, telefone, 
                   end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total)
                   value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        con.query(sql, [dados.id_usuario, dados.nome, dados.email, 
                        dados.telefone, dados.end_logradouro, 
                        dados.end_numero, dados.end_bairro, 
                        dados.end_cidade, dados.end_uf, dados.cep, 
                        dados.total], 
                    async function(err, result){
            if (err)
                callback(err, null);
            else {
                let id_pedido = result.insertId;
      
                //Itens Pedido
                for (let item of dados.itens){
                    sql = 'insert into pedido_item(id_pedido, id_produto, quantidade, valor_unitario)values (?, ?, ?, ?)';
      
                    await query(sql, [id_pedido, item.id_produto, item.quantidade, item.valor_unitario]);
                }
      
                callback(null, result);
            }
                          
          });
    }

}

export default PedidoModel;