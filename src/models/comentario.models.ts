import { DataTypes } from "sequelize";
import db from "../db/connection";
import Publicacion from "./publicacion.model";
import Usuario from "./usuario.model";

const Comentario = db.define('Comentario', {
    comentario: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'Comentarios',
    paranoid: false,
})

Comentario.belongsTo(Usuario, { as: 'usuario' });
Comentario.belongsTo(Publicacion, { as: 'Publicacion' });

export default Comentario;