import './App.css';

function App() {
  const title = "Welcome to my blog";
  let likes = 50;
  const link = "https://github.com/GabrielMerinoUCA/ReactJS";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{"Hello there"}</p>
        <a href={link}>repo</a>
      </div>
    </div>
  );
}

export default App;
