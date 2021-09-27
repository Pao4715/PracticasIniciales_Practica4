"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_controller_1 = __importDefault(require("../controllers/usuario.controller"));
var express_1 = require("express");
var usuario = (0, express_1.Router)();
usuario.get('/usuario', usuario_controller_1.default.getInstance().obtenerUsuarios);
usuario.get('/usuario/:id', usuario_controller_1.default.getInstance().obtenerUnUsuario);
usuario.post('/usuario', usuario_controller_1.default.getInstance().crearUsuario);
usuario.put('/usuario/:id', usuario_controller_1.default.getInstance().actualizarUsuario);
usuario.post('/login', usuario_controller_1.default.getInstance().login);
usuario.put('/actualizar_contrasena', usuario_controller_1.default.getInstance().cambiarContrasena);
exports.default = usuario;
