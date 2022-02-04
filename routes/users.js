import express from "express";

const router = express.Router();
const users = [
  {
    name: "Enmanuel",
    lastname: "casado",
    age: 26,
  },
];
router.get("/users", (req, resp) => {
  console.log(users);

  resp.send(users);
});

export default router;
