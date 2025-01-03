"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
require("./config/logging");
exports.app = (0, express_1.default)();
exports.app.get('/', (req, res) => {
    res.send('Hello from server..');
});
exports.app.listen(config_1.server.SERVER_PORT, () => {
    logging.log(`now listening on http://${config_1.server.SERVER_HOSTNAME}:${config_1.server.SERVER_PORT}`);
});
