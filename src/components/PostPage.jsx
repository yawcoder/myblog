import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { doc, query, where, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import parser from "html-react-parser";
import { Link } from 'react-router-dom';

const PostPage = () => {
  const pathNameObject = useParams();
  const pathName = `${pathNameObject.pathName}`;
  const [post, setPost] = useState(null)

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
  



  return (
    <HelmetProvider>
        <div className="w-full">
            <Helmet>
                {post && (
                  <title>{post.title}</title>
                )}
            </Helmet>
            {post && (
              <div className="w-full">
                <section className="bg-orange-200 pt-16 pb-10 px-5 w-full">
                  <h1 className="font-bold mt-0">{post.title}</h1>
                </section>
                <section className="py-10 px-5">
                <div className="flex justify-start gap-5 md:gap-16 [&>*:nth-child(1)]:[&>*:nth-child(1)]:text-orange-400 hover:[&>*:nth-child(2)]:[&>*:nth-child(1)]:text-orange-400 [&>*:nth-child(1)]:[&>*:nth-child(2)]:text-blue-400 hover:[&>*:nth-child(2)]:[&>*:nth-child(2)]:text-blue-400 [&>*:nth-child(1)]:[&>*:nth-child(3)]:text-red-500 hover:[&>*:nth-child(2)]:[&>*:nth-child(3)]:text-red-400">
                    {post.tags.map((tag, index) => {
                      return(
                        <Link key={index}>
                          <span>#</span>
                          <span className="">{tag}</span>
                        </Link>
                      )
                    })}
                  </div>
                  <article className="text-lg">
                    {parser(post.content)}
                  </article>
                </section>
              </div>
            )}
        </div>
    </HelmetProvider>
  )
}

export default PostPage