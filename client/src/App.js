import React from "react";
import Chat from "./components/Chat";
import Store from "./store/index"
import { Provider } from "react-redux";
import './assets/styles/styles.scss';

window.store = Store

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Chat />
      </div>
    </Provider>
  );
}

export default App;
