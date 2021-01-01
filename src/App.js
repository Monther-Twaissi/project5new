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
import About from "./components/component1/M_About";
import Profile from "./components/ProfilePage";
import { useEffect, useState } from "react";
import axios from "axios";
import Orders from "./components/Orders";

const Home = () => {
  const [orders, setOrders] = useState([]);

  async function fetchData() {
    const req = await axios.get("http://localhost:5000/api/orders/");

    setOrders(req.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteOrder = (id) => {
    axios.delete("http://localhost:5000/api/orders/" + id).then((res) => {
      console.log(res.data);
    });
    setOrders(orders.filter((el) => el._id !== id));
  };

  return (
    <div>
      {orders.map((order) => (
        <Orders
          uni={order._id}
          cardName={order.cardName}
          cardImg={order.cardImg}
          quantity={order.quantity}
          size={order.username}
          deleteOrder={deleteOrder}
          edit={order.quantity}
          fetch={fetchData}
          price={order.price}
        />
      ))}
    </div>
  );
};
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
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/test" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
