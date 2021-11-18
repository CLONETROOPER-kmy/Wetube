import express, { response } from "express";
// const express = require("express");

const PORT = 4300;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Get Out Of My Home!<h1>");
  }
  next();
};

app.use(logger, privateMiddleware);

app.get("/", (request, response) => {
  return response.send("hi");
});

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
