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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.geteventById = exports.getAllEvents = exports.deleteEvent = exports.createEvent = void 0;
const event_1 = require("../models/event");
const createEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var event = yield event_1.Events.create(Object.assign({}, req.body));
    return res.status(200).json({ success: true, message: "event created successfully", data: event });
});
exports.createEvent = createEvent;
const deleteEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedevent = yield event_1.Events.findByPk(id);
    yield event_1.Events.destroy({ where: { id } });
    return res.status(200).json({ message: "event deleted successfully", data: deletedevent });
});
exports.deleteEvent = deleteEvent;
const getAllEvents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const event = yield event_1.Events.findAll();
    return res.status(200).json({ message: "event Fetched Successfully", data: event });
});
exports.getAllEvents = getAllEvents;
const geteventById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield event_1.Events.findByPk(id);
    return res.status(200).json({ message: "event Fetched Successfully", data: event });
});
exports.geteventById = geteventById;
const updateEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield event_1.Events.update(Object.assign({}, req.body), { where: { id } });
    const updatedEvents = yield event_1.Events.findByPk(id);
    return res.status(200).json({ message: "event Updated Successfully", data: updatedEvents });
});
exports.updateEvent = updateEvent;
