import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./css/index.css";
import Loader from "./shared/loader/loader";

const AppLazyLoader = React.lazy(() => import("./app/app"));

ReactDOM.render(
  <Provider store={store}>
    <React.Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader className="text-gray-500 h-16 w-16" />
        </div>
      }
    >
      <AppLazyLoader />
    </React.Suspense>
  </Provider>,
  document.getElementById("root")
);
