import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.tsx";
// import { LoadingProvider } from "./context/LoadingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <LoadingProvider> */}

    <Provider store={store}>
      <App />
    </Provider>
    {/* </LoadingProvider> */}
  </BrowserRouter>
  // </React.StrictMode>,
);
