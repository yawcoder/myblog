import React, { useEffect, useState } from 'react'
import wavy from "../assets/wavy.png"
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getPosts();
  }, [])





  return (
    <div className="w-full">
      <img src={wavy} className="w-screen"/>
      <div className="w-[90%] mx-auto ">
        <h2 className="uppercase font-bold">Recently Published Articles</h2>
        {posts.map((post) => {
          console.log(post.content)
        })}
      </div>
    </div>
  )
}

export default Home