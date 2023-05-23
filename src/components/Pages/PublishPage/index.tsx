import { useCookies } from "react-cookie";
import "./styles.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PublishPage: React.FC = (): JSX.Element => {
  const [cookies, _] = useCookies(["access_token"]);
  const accessToken = cookies["access_token"];
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) navigate("/admin/login");
  }, []);

  return <h1>Publish page</h1>;
};
