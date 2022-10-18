"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const member_1 = require("../controllers/member");
const router = (0, express_1.Router)();
router.post("/", member_1.createMember);
router.get("/", member_1.getAllMembers);
router.get("/:id", member_1.getMemberById);
router.put("/:id", member_1.updateMember);
router.delete("/:id", member_1.deleteMember);
exports.default = router;