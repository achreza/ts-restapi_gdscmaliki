"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const body_parser_1 = require("body-parser");
const member_1 = __importDefault(require("./routes/member"));
const event_1 = __importDefault(require("./routes/event"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/member", member_1.default);
app.use("/event", event_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default
    .sync()
    .then(() => {
    console.log("Database Synced Successfully");
})
    .catch((err) => {
    console.log("Database Sync Failed");
    console.log(err);
});
app.listen(3000, () => {
    {
        console.log("Server is running on : http://localhost:3000");
    }
});
