import store from "./redux/redux-store";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
