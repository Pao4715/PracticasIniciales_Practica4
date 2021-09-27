import { Request, Response } from 'express';
import Cursos from '../models/cursosAprobados.models';
const { Op } = require("sequelize");

export default class cursosAprobadosController {
    private static _instance: cursosAprobadosController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    /**
     * OBTENER TODO EL MODELO
     */
    obtenerCursosAprobados = async (req: Request, res: Response) => {
        const lista = await Cursos.findAll({
            include: ['usuario']
        });
    
        res.json(lista);
    }

    /**
     * OBTENER MODELO
     */
    obtenerUnCurso= async (req: Request, res: Response) => {
        const { id } = req.params;

        const usuario = await Cursos.findByPk(id, {
            include: ['usuario']
        });
        
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                ok: false,
                status: 404,
                error: 'Curso no encontrado.'
            })
        }
    }
    
    /**
     * REGISTRAR MODELO
     */
    crearCursoAprobado = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const cursoAprobado = Cursos.build(body);
            await cursoAprobado.save();
            res.json(cursoAprobado);
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
    actualizarCurso = async (req: Request, res:Response) => {
        const { id } = req.params;
        const { body } = req;

        try {
            const buscarCurso = await Cursos.findByPk(id);

            if (buscarCurso) {
                await buscarCurso.update( body );
                res.json( buscarCurso );
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    error: 'Curso no encontrado.'
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