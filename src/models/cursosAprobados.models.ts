import { DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario.model";

const Cursos = db.define('Cursos', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creditos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    nota: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'CursosAprobados',
    paranoid: false,
})

Cursos.belongsTo(Usuario, { as: 'usuario' });

export default Cursos;