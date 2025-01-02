import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const BlogDetails = () => {
    // this lets use grab parameters from the route
    const {id} = useParams();
    /* apparently, json server is capable of retrieving single objects without further complications.
    You just have to put the id and it automatically know to look for an id attribute in the json
    file */
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleDeleteButtonClick = () => {
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/");
        });
    }

    return (
        <div className="blog-details">  
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDeleteButtonClick}>Delete</button>
                </article>
            )}
        </div>

    );
}
 
export default BlogDetails;