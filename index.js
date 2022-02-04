import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (rep, resp) => {
  console.log("test");
  resp.send("Welcome to home page");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
