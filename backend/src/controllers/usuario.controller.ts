import { Request, Response } from 'express';
import Usuario from '../models/usuario.model';
const { Op } = require("sequelize");

export default class UsuarioController {
    private static _instance: UsuarioController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    /**
     * OBTENER TODO EL MODELO
     */
    obtenerUsuarios = async (req: Request, res: Response) => {
        const lista = await Usuario.findAll({
            attributes: {
                exclude: ['password']
            },
        });
    
        res.json(lista);
    }

    /**
     * OBTENER MODELO
     */
    obtenerUnUsuario = async (req: Request, res: Response) => {
        const { id } = req.params;

        const usuario = await Usuario.findByPk(id, {
            attributes: {
                exclude: ['password']
            },
        });
        
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                ok: false,
                status: 404,
                error: 'Usuario no encontrado.'
            })
        }
    }

    /**
     * INICIO DE SESION
     */
    login = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const existeUsuario = await Usuario.findOne({ 
                where: {
                    registro_academico: body.registro_academico,
                    password: body.password,
                },
            });

            if(existeUsuario) {
                res.json(existeUsuario)
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    error: 'Registro o contraseña incorrectos.'
                })
            }
        } catch (error) {
            res.status(500).json({
                ok: false,
                status: 500,
                error: error
            })
        }
    }

    /**
     * CAMBIAR CONTRASENA
     */
    cambiarContrasena = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const existeUsuario = await Usuario.findOne({ 
                where: {
                    registro_academico: body.registro_academico,
                    correo: body.correo,
                },
            });

            if(existeUsuario) {
                await existeUsuario.update( body );
                res.json( existeUsuario );
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    error: 'Registro o contraseña incorrectos.'
                })
            }
        } catch (error) {
            res.status(500).json({
                ok: false,
                status: 500,
                error: error
            })
        }
    }
    
    /**
     * REGISTRAR MODELO
     */
    crearUsuario = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const existeCorreo = await Usuario.findOne({
                where: {
                    correo: body.correo
                }
            });

            if (existeCorreo) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    error: 'Ya existe un usuario con el correo: '  + body.correo
                })
            }

            const data = Usuario.build(body);
            await data.save();
            res.json(data);
        } catch (error) {
            res.status(500).json({
                ok: false,
                status: 500,
                error: error
            })
        }
    }

    /**
     * ACTUALIZAR MODELO
     */
    actualizarUsuario = async (req: Request, res:Response) => {
        const { id } = req.params;
        const { body } = req;

        try {
            const buscarUsuario = await Usuario.findByPk(id);

            if (buscarUsuario) {
                await buscarUsuario.update( body );
                res.json( buscarUsuario );
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    error: 'Usuario no encontrado.'
                })
            }
        } catch (error) {
            res.status(500).json({
                ok: false,
                status: 500,
                error: error
            })
        }
    }

}
