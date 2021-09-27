import { Request, Response } from 'express';
import Comentario from '../models/comentario.models';
const { Op } = require("sequelize");

export default class ComentarioController {
    private static _instance: ComentarioController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    /**
     * OBTENER TODO EL MODELO
     */
    obtenerComentarios = async (req: Request, res: Response) => {
        const lista = await Comentario.findAll({
            include: ['usuario', 'publicacion']
        });
    
        res.json(lista);
    }

    /**
     * OBTENER MODELO
     */
    obtenerUnComentario= async (req: Request, res: Response) => {
        const { id } = req.params;

        const usuario = await Comentario.findByPk(id, {
            include: ['usuario', 'publicacion']
        });
        
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                ok: false,
                status: 404,
                error: 'Comentario no encontrado.'
            })
        }
    }
    
    /**
     * REGISTRAR MODELO
     */
    crearComentario = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const comentarioNuevo = Comentario.build(body);
            await comentarioNuevo.save();
            res.json(comentarioNuevo);
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
    actualizarComentario = async (req: Request, res:Response) => {
        const { id } = req.params;
        const { body } = req;

        try {
            const buscarComentario = await Comentario.findByPk(id);

            if (buscarComentario) {
                await buscarComentario.update( body );
                res.json( buscarComentario );
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    error: 'Publicacion no encontrada.'
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