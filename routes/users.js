import express from "express";
import {
  createUser,
  getUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
} from "./controllers/users.js";

// Using controllers to separate users functionality with functions
const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getOneUser);

router.delete("/:id", deleteOneUser);

router.patch("/:id", updateOneUser);

export default router;
