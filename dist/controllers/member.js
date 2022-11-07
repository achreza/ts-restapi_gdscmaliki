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
exports.updateMember = exports.getMemberById = exports.getAllMembers = exports.deleteMember = exports.createMember = void 0;
const member_1 = require("../models/member");
const createMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var member = yield member_1.Members.create(Object.assign({}, req.body));
    return res.status(200).json({ success: true, message: "Member created successfully", data: member });
});
exports.createMember = createMember;
const deleteMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedMember = yield member_1.Members.findByPk(id);
    yield member_1.Members.destroy({ where: { id } });
    return res.status(200).json({ message: "Member deleted successfully", data: deletedMember });
});
exports.deleteMember = deleteMember;
const getAllMembers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield member_1.Members.findAll();
    return res.status(200).json({ success: true, message: "Member Fetched Successfully", data: member });
});
exports.getAllMembers = getAllMembers;
const getMemberById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const member = yield member_1.Members.findByPk(id);
    return res.status(200).json({ message: "Member Fetched Successfully", data: member });
});
exports.getMemberById = getMemberById;
const updateMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield member_1.Members.update(Object.assign({}, req.body), { where: { id } });
    const updatedMembers = yield member_1.Members.findByPk(id);
    return res.status(200).json({ message: "Member Updated Successfully", data: updatedMembers });
});
exports.updateMember = updateMember;
