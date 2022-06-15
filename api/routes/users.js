import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("you are logged in! always");
});

router.get("/checkadmin/:id", verifyUser, (req, res, next) => {
  res.send("you are logged in! you can delete all accounts");
});

// UPDATE
router.put("/:id", updateUser);

// DELETE

router.delete("/:id", deleteUser);

// GET

router.get("/:id", getUser);

// GET ALL

router.get("/", getUsers);

export default router;
