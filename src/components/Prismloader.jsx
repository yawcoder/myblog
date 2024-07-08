import { useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";

export default function Prismloader() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

  return (
    <div className="hidden"></div>
  )
}
