import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdminLoginPage,
  PageNotFound,
  PublishPage,
  SubscribePage,
  UnsubscribePage,
} from "../Pages";
import "./global.css";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscribePage />} />
        <Route
          path="/unsubscribe/:subscription_id"
          element={<UnsubscribePage />}
        />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/publish" element={<PublishPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
