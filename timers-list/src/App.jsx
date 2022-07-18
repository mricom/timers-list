import { useState } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main></Main>
      </Provider>
    </div>
  );
}

export default App;
