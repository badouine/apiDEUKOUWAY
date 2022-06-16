import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
} from "../controllers/room";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// DELETE

router.delete("/:id", verifyAdmin, deleteRoom);

// GET

router.get("/:id", getRooms);

// GET ALL

router.get("/", getRooms);

export default router;
