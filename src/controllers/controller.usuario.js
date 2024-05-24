import UsuarioModel from "../models/model.usuario.js";

class UsuarioController {

    static getAllUsuarios(req, res) {
        try {
            UsuarioModel.getAllUsuarios(function(err, result){
                if (err) {
                    console.error(err);
                    return res.status(500).json( {error: "Ocorreu um erro ao buscar os usuários."} ); 
                }

                if (!result[0]) {
                    return res.status(404).json( { message: "Não foram encontrados usuários"} );
                }
                
                return res.status(200).json( result);
            });
        } catch (error) {
            console.error(error);
            res.status(500).json( { error: "Erro interno no servidor"} );
            
        }
    }
}

export default UsuarioController;