-- CREAR BASE DE DATOS
CREATE DATABASE Practica;

-- USAR BASE DE DATOS
USE Practica;

-- CREAR TABLAS
-- CREAR TABLA USUARIO
CREATE TABLE Usuarios(
    id INTEGER AUTO_INCREMENT NOT NULL,
    registro_academico VARCHAR(9) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

-- CREAR TABLA PUBLICACION
CREATE TABLE Publicaciones(
    id INTEGER AUTO_INCREMENT NOT NULL,
    curso VARCHAR(255) NULL,
    catedratico VARCHAR(255) NULL,
    mensaje VARCHAR(1000) NULL,
    fecha_hora DATETIME NOT NULL,
    usuarioId INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- CREAR TABLA COMENTARIOS
CREATE TABLE Comentarios(
    id INTEGER AUTO_INCREMENT NOT NULL,
    comentario VARCHAR(1000) NULL,
    fecha_hora DATETIME NOT NULL,
    usuarioId INTEGER NOT NULL,
    publicacionId INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (publicacionId) REFERENCES Publicaciones(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- CREAR TABLA CURSOS APROBADOS
CREATE TABLE CursosAprobados(
    id INTEGER AUTO_INCREMENT NOT NULL,
    codigo VARCHAR(10) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    creditos TINYINT NOT NULL,
    fecha DATE NOT NULL,
    nota TINYINT NOT NULL,
    usuarioId INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);