import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then((res) => { // res is the response in plain data of the url fecthed
            if(!res.ok) {
                throw Error(`Response status returned "not ok"`);
            }
            return res.json(); // json method parses data in json format and it's returned
        })
        .then((data) => { // once the parsing is done (takes time), we have the data on json format
            setBlogs(data);
            setIsPending(false);
        })
        .catch((e) => {
            setIsPending(false);
            setError(e.message);
        });
    }, []);



    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;