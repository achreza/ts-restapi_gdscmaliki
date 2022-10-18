import { Router } from "express";

import { createEvent, deleteEvent, getAllEvents, geteventById, updateEvent } from "../controllers/event";

const router = Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id", geteventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
