import { con } from "../config/database.js";

class UsuarioModel {

    // Metodo para obter todos os usiuarios
    static getAllUsuarios(calback) {
        let sql = `select * from usuario`;

        con.query(sql, function(err, result){
            if (err)
                calback(err, null);
            else
                calback(null, result);
        });
    }

}

export default UsuarioModel;