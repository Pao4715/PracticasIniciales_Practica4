import express = require('express');
import path = require('path');
import db from '../db/connection';
import cursosAprobados from '../routes/cursosAprobados.routes';
import publicacion from '../routes/publicacion.routes';
import usuario from '../routes/usuario.routes';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // CORS
        /**
         * HEADEARS & CORS
         */
        this.app.use((req:any, res:any, next:any) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
            if(req.methods == "OPTIONS") {
            res.sendStatus(200);
            } else {
            next();
            }
        });

        // LECTURA DEL BODY
        this.app.use( express.json({ limit: '10mb' }) );
        this.app.use( express.urlencoded({ limit: '10mb', extended: true }) );

        // CARPETA PUBLICA
        this.publicFolder();
    }

    /**
     * CONEXION MYSQL
     */
    async dbConnection() {
        try {
            await db.authenticate();
        } catch (error:any) {
            throw new Error(error);            
        }
    }

    /**
     * CONEXION MYSQL
     */
     async dbDisconnection() {
        try {
            await db.close()
        } catch (error:any) {
            throw new Error(error);            
        }
    }

    /**
     * CARPETA PUBLICA
     */
    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use( express.static(publicPath));
    }

    /**
     * RUTAS
     */
    routes() {
        const api:string = "/api/"
        this.app.use(api, usuario);
        this.app.use(api, publicacion);
        this.app.use(api, cursosAprobados);
    }

    /**
     * LISTEN PORT
     */
    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}` );
        });
    }

}