import express from "express";
import { checkPermission } from "../middlewares/CheckPermission";
import { searchPost, createPost, getAllPost, getOnePost, removePost, updatePost } from "../controllers/post";
const RouterPost = express.Router();

RouterPost.get("/", getAllPost);
RouterPost.get("/:id", getOnePost);
// RouterPost.get("/", searchPost);
RouterPost.post("/",checkPermission, createPost);
RouterPost.put("/:id",checkPermission, updatePost);
RouterPost.delete("/:id",checkPermission, removePost);

export default RouterPost;