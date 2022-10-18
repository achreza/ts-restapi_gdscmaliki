"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const member_1 = require("../models/member");
const event_1 = require("../models/event");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "gdsc_maliki",
    logging: false,
    models: [member_1.Members, event_1.Events],
});
exports.default = connection;
