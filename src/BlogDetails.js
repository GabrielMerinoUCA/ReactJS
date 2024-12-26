import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    // this lets use grab parameters from the route
    const {id} = useParams();
    

    return ( 
        <h2>Blog Details - {id}</h2>
    );
}
 
export default BlogDetails;