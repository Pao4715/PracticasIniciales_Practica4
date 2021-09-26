import Server from "./server/server";

/**
 * CONFIGURACIÓN DE SERVIDOR
 */
let port = 3000;
const server = new Server(port);

server.listen();
