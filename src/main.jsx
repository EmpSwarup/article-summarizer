import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

import App from "./App";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Analytics />
    </Provider>
  </React.StrictMode>
);
