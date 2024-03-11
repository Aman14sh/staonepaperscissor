"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = require('express');
const server = http_1.default.createServer(http_1.default);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*"
    }
});
io.on("connection", (socket) => {
    // ...
    console.log("a user is connected");
});
server.listen(4000, () => {
    console.log("Server listening on port 3000*");
});
