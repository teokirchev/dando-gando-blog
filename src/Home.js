import { useState, useEffect } from "react";
import { BlogList } from "./BlogList";


export const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setBlogs(data)
                setIsPending(false);
            })
            .catch(err => {
                
            })
    }, [])

    return (
        <div className="home">
            {isPending && <div className="loading">Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}