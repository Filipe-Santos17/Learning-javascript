import { useEffect, useState } from "react"
//import api from "../services/axios"
import Post from "./Post"

export default function Posts() {
  const [posts,setPosts] = useState()  

  useEffect(() => {
    fetch("http://localhost:8081/posts")
    .then(resp => resp.json())
    .then(dados => setPosts(dados))
  },[])  

  return (
    <>
        {posts?.map(data => {
            return <Post key={data.id} name={data.name}  topic={data.topic} content={data.content}></Post>
        })}
    </>
  )
}
