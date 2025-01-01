import { useState } from "react";


const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);

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
            console.log(res);
            setIsPending(false);
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