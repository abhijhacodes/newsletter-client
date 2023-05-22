import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <Toaster
      toastOptions={{
        className: "toast-notification",
        duration: 5000,
      }}
    />
  </>
);
