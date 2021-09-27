import { Request, Response } from 'express';
import Publicacion from '../models/publicacion.model';
const { Op } = require("sequelize");

export default class PublicacionController {
    private static _instance: PublicacionController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    /**
     * OBTENER TODO EL MODELO
     */
    obtenerPublicaciones = async (req: Request, res: Response) => {
        const lista = await Publicacion.findAll({
            include: ['usuario']
        });
    
        res.json(lista);
    }

    /**
     * OBTENER MODELO
     */
    obtenerUnaPublicacion= async (req: Request, res: Response) => {
        const { id } = req.params;

        const usuario = await Publicacion.findByPk(id, {
            include: ['usuario']
        });
        
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                ok: false,
                status: 404,
                error: 'Publicacion no encontrada.'
            })
        }
    }
    
    /**
     * REGISTRAR MODELO
     */
    crearPublicacion = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const publicacionNueva = Publicacion.build(body);
            await publicacionNueva.save();
            res.json(publicacionNueva);
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
    actualizarPublicacion = async (req: Request, res:Response) => {
        const { id } = req.params;
        const { body } = req;

        try {
            const buscarPublicacion = await Publicacion.findByPk(id);

            if (buscarPublicacion) {
                await buscarPublicacion.update( body );
                res.json( buscarPublicacion );
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
