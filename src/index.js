import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loader from "./shared/loader/loader";
import "./css/index.css";

const App = React.lazy(() => import("./app/app"));

ReactDOM.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader className="text-gray-500 h-16 w-16" />
        </div>
      }
    >
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
