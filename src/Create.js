import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>Written by: {author}</p>
            </form>
        </div>
    );
}
 
export default Create;