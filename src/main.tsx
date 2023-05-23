import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CookiesProvider>
    <App />
    <Toaster
      toastOptions={{
        className: "toast-notification",
        duration: 5000,
      }}
    />
  </CookiesProvider>
);
