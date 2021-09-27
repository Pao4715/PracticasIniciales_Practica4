"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var publicacion_model_1 = __importDefault(require("./publicacion.model"));
var usuario_model_1 = __importDefault(require("./usuario.model"));
var Comentario = connection_1.default.define('Comentario', {
    comentario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    fecha_hora: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'Comentarios',
    paranoid: false,
});
Comentario.belongsTo(usuario_model_1.default, { as: 'usuario' });
Comentario.belongsTo(publicacion_model_1.default, { as: 'Publicacion' });
exports.default = Comentario;
