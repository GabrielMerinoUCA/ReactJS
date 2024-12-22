import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then((res) => { // res is the response in plain data of the url fecthed
            return res.json(); // json method parses data in json format and it's returned
        }).then((data) => { // once the parsing is done (takes time), we have the data on json format
            setBlogs(data);
        });
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;