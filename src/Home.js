import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", author: "John" , body: "lorem ipsum...", id: 1},
        {title: "Welcome party", author: "Roger" , body: "lorem ipsum...", id: 2},
        {title: "Web dev tool tips", author: "Anon" , body: "lorem ipsum...", id: 3},
    ]);

    const removeBlog = (id) => {
        const newBlogs = blogs.filter((blog) => {return (blog.id !== id);});
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log("Rendered!");
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" removeBlog={removeBlog} />
        </div>
     );
}
 
export default Home;