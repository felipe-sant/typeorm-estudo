import {Router} from "express";
import userRouter from "../controllers/userController";

const routers = Router();

routers.use("/users", userRouter);

export default routers