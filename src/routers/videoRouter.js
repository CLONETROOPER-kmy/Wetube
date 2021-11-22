import express from "express";
import { upload, watch, edit, removevideo } from "../controllers/videocontroller";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", removevideo);
videoRouter.get("/upload", upload);

export default videoRouter;
