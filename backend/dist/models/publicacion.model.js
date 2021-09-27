"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var usuario_model_1 = __importDefault(require("./usuario.model"));
var Publicacion = connection_1.default.define('Publicacion', {
    curso: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    catedratico: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    mensaje: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha_hora: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'Publicaciones',
    paranoid: false,
});
Publicacion.belongsTo(usuario_model_1.default, { as: 'usuario' });
exports.default = Publicacion;
