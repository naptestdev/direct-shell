import dotenv from "dotenv";
import express from "express";
import { exec } from "child_process";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  if (!req.query.command) return res.send("Missing command query param");

  exec(req.query.command).stdout.pipe(res);
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is listening on port ${port}. http://localhost:${port}`)
);
