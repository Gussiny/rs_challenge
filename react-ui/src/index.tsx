import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.css";
import { store } from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
