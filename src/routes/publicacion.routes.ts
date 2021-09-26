
import PublicacionController from "../controllers/publicacion.controller"
import { Router } from "express";
const publicacion = Router();

publicacion.get('/publicacion', PublicacionController.getInstance().obtenerPublicaciones);
publicacion.get('/publicacion/:id', PublicacionController.getInstance().obtenerUnaPublicacion);
publicacion.post('/publicacion', PublicacionController.getInstance().crearPublicacion);
publicacion.put('/publicacion/:id', PublicacionController.getInstance().actualizarPublicacion);

export default publicacion;