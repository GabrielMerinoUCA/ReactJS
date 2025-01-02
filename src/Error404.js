import { Link } from "react-router-dom";
const Error404 = () => {
    
    return ( 
        <div className="not-found">
            <h2>404 Page not found :(</h2>
            <p>The page you are trying to visit couldn't be found...</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
}
 
export default Error404;