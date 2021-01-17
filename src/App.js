import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/homepage/Home";
import store from "./redux/store";

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
