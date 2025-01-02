import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    // this variable holds information about the page history similarly to the back and forward button of the browser
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = {title, author, body};

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-type": "application/json"}, // specify we are sending json data
            body: JSON.stringify(blog) // In order to send data as json, we have to make it a string on a specific format which the JSON object allows us to do
        }).then((res)=> {
            console.log("new blog added");
            setIsPending(false);
            history.push("/");
        });
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    value={title}
                    required
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="John">John</option>
                    <option value="Roger">Roger</option>
                    <option value="Anon">Anon</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;