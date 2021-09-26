import { DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario.model";

const Publicacion = db.define('Publicacion', {
    curso: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    catedratico: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mensaje: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'Publicaciones',
    paranoid: false,
})

Publicacion.belongsTo(Usuario, { as: 'usuario' });

export default Publicacion;