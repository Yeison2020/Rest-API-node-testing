import express from "express";

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
router.get("/", (req, resp) => {
  console.log(users);

  resp.send(users);
});

router.post("/");

export default router;
