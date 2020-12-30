import "./App.css";
import DrinkList from "./components/DrinkList";
import FoodList from "./components/FoodList";
function App() {
  return (
    <div className="App">
      <FoodList />
      <br />
      <DrinkList />
    </div>
  );
}

export default App;
