"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var comentario_controller_1 = __importDefault(require("../controllers/comentario.controller"));
var comentario = (0, express_1.Router)();
comentario.get('/comentario', comentario_controller_1.default.getInstance().obtenerComentarios);
comentario.get('/comentario/:id', comentario_controller_1.default.getInstance().obtenerUnComentario);
comentario.post('/comentario', comentario_controller_1.default.getInstance().crearComentario);
comentario.put('/comentario/:id', comentario_controller_1.default.getInstance().actualizarComentario);
exports.default = comentario;
