"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cursosAprobados_models_1 = __importDefault(require("../models/cursosAprobados.models"));
var Op = require("sequelize").Op;
var cursosAprobadosController = /** @class */ (function () {
    function cursosAprobadosController() {
        var _this = this;
        /**
         * OBTENER TODO EL MODELO
         */
        this.obtenerCursosAprobados = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var lista;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cursosAprobados_models_1.default.findAll({
                            include: ['usuario']
                        })];
                    case 1:
                        lista = _a.sent();
                        res.json(lista);
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * OBTENER MODELO
         */
        this.obtenerUnCurso = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, usuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, cursosAprobados_models_1.default.findByPk(id, {
                                include: ['usuario']
                            })];
                    case 1:
                        usuario = _a.sent();
                        if (usuario) {
                            res.json(usuario);
                        }
                        else {
                            res.status(404).json({
                                ok: false,
                                status: 404,
                                error: 'Curso no encontrado.'
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * REGISTRAR MODELO
         */
        this.crearCursoAprobado = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var body, cursoAprobado, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        cursoAprobado = cursosAprobados_models_1.default.build(body);
                        return [4 /*yield*/, cursoAprobado.save()];
                    case 2:
                        _a.sent();
                        res.json(cursoAprobado);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        res.status(500).json({
                            ok: false,
                            status: 500,
                            error: error_1
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /**
         * ACTUALIZAR MODELO
         */
        this.actualizarCurso = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, body, buscarCurso, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        body = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, cursosAprobados_models_1.default.findByPk(id)];
                    case 2:
                        buscarCurso = _a.sent();
                        if (!buscarCurso) return [3 /*break*/, 4];
                        return [4 /*yield*/, buscarCurso.update(body)];
                    case 3:
                        _a.sent();
                        res.json(buscarCurso);
                        return [3 /*break*/, 5];
                    case 4:
                        res.status(404).json({
                            ok: false,
                            status: 404,
                            error: 'Curso no encontrado.'
                        });
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_2 = _a.sent();
                        res.status(500).json({
                            ok: false,
                            status: 500,
                            error: error_2
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    }
    cursosAprobadosController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return cursosAprobadosController;
}());
exports.default = cursosAprobadosController;
