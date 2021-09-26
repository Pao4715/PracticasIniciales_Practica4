
import { Router } from "express";
import cursosAprobadosController from "../controllers/cursosAprobados.controller";
const cursosAprobados = Router();

cursosAprobados.get('/cursosAprobados', cursosAprobadosController.getInstance().obtenerCursosAprobados);
cursosAprobados.get('/cursosAprobados/:id', cursosAprobadosController.getInstance().obtenerUnCurso);
cursosAprobados.post('/cursosAprobados', cursosAprobadosController.getInstance().crearCursoAprobado);
cursosAprobados.put('/cursosAprobados/:id', cursosAprobadosController.getInstance().actualizarCurso);

export default cursosAprobados;