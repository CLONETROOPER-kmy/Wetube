import express from "express";
import { logout, edit, removeuser, profile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", removeuser);
userRouter.get(":id", profile);

export default userRouter;
