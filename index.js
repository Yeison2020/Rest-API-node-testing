import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, resp) => {
  console.log("test");
  resp.send("Welcome  -- Please Home page hereee");
});
// Here is how I set my staring routes check changing the values.

// 1. the routes would be "users/users" app.use("users/+ usersRouter = users")
app.use("/users", usersRouter);

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
