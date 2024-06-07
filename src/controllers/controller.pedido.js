import PedidoModel from "../models/model.pedidos.js";

class PedidoController {
    static getAllPedidos(req, res) {
        try {
            PedidoModel.getAllPedidos(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( {error: "Ocorreu um erro ao buscar pedidos."} ); 
                }

                if (!result[0]) {
                    return res.status(404).json( { message: "Não foram encontrados pedidos" } );
                }

                return res.status(200).json(result);
            });

        } catch (error) {
            // Captura qualquer exceção não tratada
            console.error(error);
            // Retorna uma resposta de erro 500
            res.status(500).json( { error: "Erro interno no servidor." } );
        }
    }

    static createPedido(req, res) {
        const p = req.body;

        try {
            PedidoModel.createPedido(p, function(err, result){
                if (err) {
                    console.error(`Erro ao cadrastrar pedido: `, err);
                    return res.status(500).json( { error: "Ocorreu um erro ao cadastrar o pedido." } );
                }

                return res.status(201).json( { message: "Pedido cadastrado com sucesso.", data: {
                    id: result.insertId
                    }
                } );
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor" } );
        }
    }


}

export default PedidoController;