import { useEffect, useState } from 'react';
import wavy from "../assets/wavy.png";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
    <HelmetProvider>
      <div className="w-full">
      <Helmet>
        <title>Isaac Anim</title>
      </Helmet>
      <img src={wavy} className="w-screen"/>
      <section className="w-[90%] mx-auto my-5 leading-[1.7rem]">
        <h2 className="text-lg font-bold uppercase text-center text-gray-500 my-10">Recently Published Articles</h2>
        {posts.map((post) => {
          return(
            <div key={post.id} className="w-full md:w-1/2 mx-auto">
              <article className="hover:pointer w-full">
                <Link to={`/${post.pathName}`} className="[&>*:nth-child(1)]:hover:text-orange-400 [&>*:nth-child(3)]:hover:text-orange-400">
                  <h2 className="text-2xl font-extrabold my-5 mx-auto">{post.title}</h2>
                  <p className="text-lg">{post.summary}</p>
                  <button className="my-5 font-extrabold">Read More...</button>
                </Link>
              </article>
            </div>
          )
        })}
      </section>
    </div>
    </HelmetProvider>
  )
}

export default Home