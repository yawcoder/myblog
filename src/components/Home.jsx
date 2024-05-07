import { useEffect, useState } from 'react';
import wavy from "../assets/wavy.png";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "Posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getPosts();
  }, []);





  return (
    <div className="w-full">
      <img src={wavy} className="w-screen"/>
      <div className="w-[90%] mx-auto my-5">
        <h2 className="font-bold uppercase text-center text-gray-500">Recently Published Articles</h2>
        {}
      </div>
    </div>
  )
}

export default Home