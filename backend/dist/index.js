"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
/**
 * CONFIGURACIÓN DE SERVIDOR
 */
var port = 3000;
var server = new server_1.default(port);
server.listen();
