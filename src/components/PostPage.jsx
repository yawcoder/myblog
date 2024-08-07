import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import parser from "html-react-parser";
import { Link } from 'react-router-dom';
import Prismloader from './Prismloader';

const PostPage = () => {
  const pathNameObject = useParams();
  const pathName = `${pathNameObject.pathName}`;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const postCollectionRef = collection(db, "Posts");
      const q = query(postCollectionRef, where("pathName", "==", pathName));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        setPost(doc.data());
      })
    }
    getPost();

  }, [])

  const getDate = (timestamp) => {
    const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date(timestamp);
    const monthNumber = date.getMonth();
    const dayofMonth = date.getDate();
    const year = date.getFullYear();
    const month = monthOfYear[monthNumber];
    return `${month} ${dayofMonth}, ${year}`;
  }
  
  

  return (
    <HelmetProvider>
        <div className="w-full">
            <Helmet>
                {post && (
                  <>
                  <title>{post.title}</title>
                  <meta name="description" content={post.summary}/>
                  </>
                )}
            </Helmet>
            {post && (
              <article className="w-full">
                <section className="pt-16 pb-10 mx-auto w-[90%]">
                  <h1 className="md:w-3/5 mx-auto font-bold mt-0 font-nunito">{post.title}</h1>
                  <p className="mb-0 mt-3 md:w-3/5 mx-auto text-lg">{getDate(post._updatedBy.timestamp.seconds * 1000)}</p>
                </section>
                <section className="py-10 px-5 md:w-[90%] mx-auto">
                <div className="md:w-3/5 mx-auto flex justify-start gap-1 md:gap-16 [&>*:nth-child(1)]:[&>*:nth-child(1)]:text-orange-400 [&>*:nth-child(2)]:hover:[&>*:nth-child(1)]:text-orange-400 [&>*:nth-child(1)]:[&>*:nth-child(2)]:text-blue-400 [&>*:nth-child(2)]:hover:[&>*:nth-child(2)]:text-blue-400 [&>*:nth-child(1)]:[&>*:nth-child(3)]:text-red-500 [&>*:nth-child(2)]:hover:[&>*:nth-child(3)]:text-red-500">
                    {post.tags.map((tag, index) => {
                      return(
                        <Link key={index} className="border-[1px] border-gray-400 px-3 rounded-full">
                          <span>#</span>
                          <span>{tag}</span>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="text-lg md:w-3/5 mx-auto leading-[2.1rem]">
                    {parser(post.content)}
                  </div>
                </section>
              </article>
            )}
            <Prismloader />
        </div>
    </HelmetProvider>
  )
}

export default PostPage