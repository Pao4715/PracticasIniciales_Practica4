"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var publicacion_controller_1 = __importDefault(require("../controllers/publicacion.controller"));
var express_1 = require("express");
var publicacion = (0, express_1.Router)();
publicacion.get('/publicacion', publicacion_controller_1.default.getInstance().obtenerPublicaciones);
publicacion.get('/publicacion/:id', publicacion_controller_1.default.getInstance().obtenerUnaPublicacion);
publicacion.post('/publicacion', publicacion_controller_1.default.getInstance().crearPublicacion);
publicacion.put('/publicacion/:id', publicacion_controller_1.default.getInstance().actualizarPublicacion);
exports.default = publicacion;
