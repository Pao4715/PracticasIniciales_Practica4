import { Sequelize } from 'sequelize';

// NOMBRE DB, USUARIO, CONTRASENA
const db = new Sequelize('Practica', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false
    }
});

export default db;