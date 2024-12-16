import {useState} from "react"

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", author: "John" , body: "lorem ipsum...", id: 1},
        {title: "Welcome party", author: "Roger" , body: "lorem ipsum...", id: 2},
        {title: "Web dev tool tips", author: "Anon" , body: "lorem ipsum...", id: 3},
    ]);

    

    return ( 
        <div className="home">
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </div>
                );
            })}
        </div>
     );
}
 
export default Home;