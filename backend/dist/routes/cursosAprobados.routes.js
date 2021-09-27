"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cursosAprobados_controller_1 = __importDefault(require("../controllers/cursosAprobados.controller"));
var cursosAprobados = (0, express_1.Router)();
cursosAprobados.get('/cursosAprobados', cursosAprobados_controller_1.default.getInstance().obtenerCursosAprobados);
cursosAprobados.get('/cursosAprobados/:id', cursosAprobados_controller_1.default.getInstance().obtenerUnCurso);
cursosAprobados.post('/cursosAprobados', cursosAprobados_controller_1.default.getInstance().crearCursoAprobado);
cursosAprobados.put('/cursosAprobados/:id', cursosAprobados_controller_1.default.getInstance().actualizarCurso);
exports.default = cursosAprobados;
