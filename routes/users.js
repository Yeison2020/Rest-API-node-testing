import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
let users = [];
router.get("/", (req, res) => {
  // console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  // Here I'm creating a new copy of the user Object, but adding a new ID to it.
  // But not mutauting my orginal Object Important part
  // This is really importnt part continue adding user with differents ID
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(`User with the name of ${user.name} added to the database`);
  // console.log(userWithId);
});

router.get("/:id", (req, res) => {
  // How to access Params from URL
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Why users = users This setting my current database = to It's new deleted value mutuating database deleteing the Element with the const {id} = req.body
  // Revisar porque el filter deletes The values here
  users = users.filter((user) => user.id !== id);
  res.send(users);
});

export default router;
