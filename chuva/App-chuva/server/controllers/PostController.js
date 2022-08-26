const Post = require("../database/models/postModel")

module.exports = {
    async PostIn(req,res){
        const {name,topic,content} = req.body
        const post = await Post.create({name,topic,content})

        return res.json(post)
    },
    async PostOut(req,res){
        const posts = await Post.findAll()

        return res.json(posts)
    }
}