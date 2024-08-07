import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { articles } from '../assets/articles';
import parser from "html-react-parser";
import Prismloader from './Prismloader';


const Home = () => {
  const [posts, setPosts] = useState(articles);

  useEffect(() => {
    
  }, []);


  // const getDate = (timestamp) => {
  //   const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  //   const date = new Date(timestamp);
  //   const monthNumber = date.getMonth();
  //   const dayofMonth = date.getDate();
  //   const year = date.getFullYear();
  //   const month = monthOfYear[monthNumber];
  //   return `${month} ${dayofMonth}, ${year}`;
  // }




  return (
    <HelmetProvider>
      <div className="w-full">
      <Helmet>
        <title>Isaac Anim</title>
      </Helmet>
      <section className="w-[90%] mx-auto my-5 leading-[1.7rem]">
        <h2 className="text-lg font-bold font-nunito uppercase text-center text-gray-500 mt-10">Recently Published Articles</h2>
        {posts.map((post) => {
          return(
            <div key={post.id} className="w-full md:w-3/5 mx-auto my-16">
              <article className="hover:pointer w-full">
                  <h2 className="text-2xl font-extrabold mx-auto my-2 hover:text-red-400"><Link to={`/${post.pathName}`} className="font-nunito">{post.title}</Link></h2>
                  {/* <p className="my-3 md:w-full mx-auto text-lg">{getDate(post._updatedBy.timestamp.seconds * 1000)}</p> */}
                  {/* <div className="flex justify-start gap-1 md:gap-16 [&>*:nth-child(1)]:[&>*:nth-child(1)]:text-orange-400 [&>*:nth-child(2)]:hover:[&>*:nth-child(1)]:text-orange-400 [&>*:nth-child(1)]:[&>*:nth-child(2)]:text-blue-400 [&>*:nth-child(2)]:hover:[&>*:nth-child(2)]:text-blue-400 [&>*:nth-child(1)]:[&>*:nth-child(3)]:text-red-500 [&>*:nth-child(2)]:hover:[&>*:nth-child(3)]:text-red-500">
                    {post.tags.map((tag, index) => {
                      return(
                        <Link key={index} className="border-[1px] border-gray-400 px-3 rounded-full">
                          <span>#</span>
                          <span>{tag}</span>
                        </Link>
                      )
                    })}
                  </div> */}
                  <p className="text-lg my-5 leading-8">{parser(post.content)}</p>
                  <Link to={`/${post.pathName}`} className="font-extrabold text-red-400 hover:underline">Read More...</Link>
              </article>
            </div>
          )
        })}
      </section>
      <Prismloader />
    </div>
    </HelmetProvider>
  )
}

export default Home