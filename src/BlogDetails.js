import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";



export const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div className="blog-details">
            {isPending &&
                <div className="loader-wrapper">
                    <div className="loader">
                    </div>
                </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div className="text">{blog.body}</div>
                </article>
            )}

        </div>
    );
};