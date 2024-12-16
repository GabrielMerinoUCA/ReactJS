import {useState} from "react"

const Home = () => {
    const [name, setName] = useState("John");

    const clickHandler = () => {
        setName("N/a");
    }


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={clickHandler}>Click Me!</button>
        </div>
     );
}
 
export default Home;