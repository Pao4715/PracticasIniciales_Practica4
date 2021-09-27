"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
// NOMBRE DB, USUARIO, CONTRASENA
var db = new sequelize_1.Sequelize('Practica', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false
    }
});
exports.default = db;
