import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs"); // using objs allows us to only get some of the variables instead of all of them    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;