import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const users = [
  {
    name: "Enmanuel",
    lastname: "casado",
    age: 26,
  },
  {
    name: "Yeuri",
    lastname: "casado",
    age: 23,
  },

  {
    name: "Deivi",
    lastname: "casado",
    age: 22,
  },
];
router.get("/", (req, res) => {
  console.log(users);
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
  console.log(userWithId);
});

// router.get("/id", (req, res) => {});

export default router;
