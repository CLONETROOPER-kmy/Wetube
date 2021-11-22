import express from "express";
import { join, login } from "../controllers/userController";
import { hompage, search } from "../controllers/videocontroller";

const globalRouter = express.Router();

globalRouter.get("/", hompage);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
