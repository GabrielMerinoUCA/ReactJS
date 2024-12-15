import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  let likes = 50;
  const link = "https://github.com/GabrielMerinoUCA/ReactJS";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <p>Liked {likes} times</p>
        <p>{"Hello there"}</p>
        <a href={link}>repo</a>
      </div>
    </div>
  );
}

export default App;
