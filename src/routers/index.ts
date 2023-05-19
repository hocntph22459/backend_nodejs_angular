import express from "express";
import RouterPost from "./post";
import RouterCategory from "./category";
import RouterComment from "./comment";
import routerAuth from "./auth";
import RouterContact from "./contact";
import RouterUser from "./user";
import RouterAbout from "./about";
const Router = express.Router();

Router.use("/posts", RouterPost);
Router.use("/categories", RouterCategory);
Router.use("/comments", RouterComment);
Router.use("/contacts", RouterContact);
Router.use("/abouts", RouterAbout);
Router.use("/auth", routerAuth);
Router.use("/users", RouterUser);

export default Router;