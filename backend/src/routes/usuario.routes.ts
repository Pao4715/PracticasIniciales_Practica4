
import UsuarioController from "../controllers/usuario.controller"
import { Router } from "express";
const usuario = Router();

usuario.get('/usuario', UsuarioController.getInstance().obtenerUsuarios);
usuario.get('/usuario/:id', UsuarioController.getInstance().obtenerUnUsuario);
usuario.post('/usuario', UsuarioController.getInstance().crearUsuario);
usuario.put('/usuario/:id', UsuarioController.getInstance().actualizarUsuario);
usuario.post('/login', UsuarioController.getInstance().login);
usuario.put('/actualizar_contrasena', UsuarioController.getInstance().cambiarContrasena);

export default usuario;