const Home = () => {

    const clickHandler = (e) => {
        console.log("Hello world", e);
    }

    const secondClickHandler = (name, e) => {
        console.log("Hello " + name, e)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={clickHandler}>Click Me!</button>
            <button onClick={(e) => secondClickHandler("name", e)}>Click Me again!</button>
        </div>
     );
}
 
export default Home;