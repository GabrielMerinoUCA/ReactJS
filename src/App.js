import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import {BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* 
          Switch is a component that allows routing from a list of other components. It prevents more
          than one route from displaying at the same time. The way it works is that depending on the
          user, it will select one of the target routes to replace itself on the final dom so it only
          uses the specified area. It's like having responsible sections instead of changing the whole page
          */}
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>  
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
