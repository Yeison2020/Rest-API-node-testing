import express from "express";

const router = express.Router();

router.get("/users", (req, resp) => {
  resp.send("Hello all users");
});

export default router;
