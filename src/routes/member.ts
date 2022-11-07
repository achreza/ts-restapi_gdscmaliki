import { Router } from "express";

import { createMember, deleteMember, getAllMembers, getMemberById, updateMember } from "../controllers/member";

const router = Router();

router.post("/", createMember);
router.get("/", getAllMembers);
router.get("/:id", getMemberById);
router.patch("/:id", updateMember);
router.delete("/:id", deleteMember);

export default router;
