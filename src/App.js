import "./App.css";
import DrinkList from "./components/DrinkList";
import FoodList from "./components/FoodList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "./components/footer";
import Log from "./components/log";
import LandingPage from "./LandingPage";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/food" exact component={FoodList} />
          <Route path="/drink" component={DrinkList} />
          <Route path="/log" component={Log} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
