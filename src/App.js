import "./App.css";
import DrinkList from "./components/DrinkList";
import FoodList from "./components/FoodList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router basename="/">
      <div className="App">
        {/* <Mynav /> */}
        <Switch>
          <Route path="/food" exact component={FoodList} />
          <Route path="/drink" component={DrinkList} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
