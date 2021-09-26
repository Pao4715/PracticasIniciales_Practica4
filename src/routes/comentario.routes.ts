
import { Router } from "express";
import ComentarioController from "../controllers/comentario.controller";
const comentario = Router();

comentario.get('/comentario', ComentarioController.getInstance().obtenerComentarios);
comentario.get('/comentario/:id', ComentarioController.getInstance().obtenerUnComentario);
comentario.post('/comentario', ComentarioController.getInstance().crearComentario);
comentario.put('/comentario/:id', ComentarioController.getInstance().actualizarComentario);

export default comentario;