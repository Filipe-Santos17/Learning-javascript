const express = require("express")
const routes = express.Router()
const PostController = require("../controllers/PostController")

routes.get("/posts", PostController.PostOut)
routes.post("/postsend", PostController.PostIn)

module.exports = routes