import { BlogList } from "./BlogList";
import { useFetch } from "./useFetch";


export const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isPending &&
                <div className="loader-wrapper">
                    <div className="loader">
                    </div>
                </div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}