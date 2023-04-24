
export const BlogList = ({
    blogs,
    handleDelete
}) => {

    return (
        <div>
            {blogs.map((blog) => (
                <div className="blogs" key={blog.id}>
                    <div>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </div>
                    <div>
                        {/* <button className="btn" onClick={() => handleDelete(blog.id)}>Delete</button> */}
                    </div>
                </div>
            ))}
        </div>
    );
}