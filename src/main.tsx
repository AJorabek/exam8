import ReactDOM from "react-dom/client";
import Layout from "./Layout.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
