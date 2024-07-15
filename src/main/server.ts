import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "world" });
});

export default app;
