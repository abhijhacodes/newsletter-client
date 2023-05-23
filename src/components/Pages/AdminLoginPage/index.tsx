import { useEffect, useState } from "react";
import { Button } from "../../UI";
import "./styles.css";
import { AdminServices } from "../../../services/admin";
import { toast } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AdminLoginPage: React.FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies["access_token"]) goToPublishPage();
  }, []);

  const goToPublishPage = () => {
    navigate("/admin/publish");
  };

  const loginCallback = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await AdminServices.login(username, password);
    if (res.success) {
      toast.success(res.message);
      setCookies("access_token", res.access_token, { path: "/" });
      goToPublishPage();
    } else {
      toast.error(res.message);
    }
    setIsLoading(false);
  };

  return (
    <main>
      <div className="form__parent">
        <form onSubmit={loginCallback} className="login__form">
          <label htmlFor="username" className="login__label">
            Enter admin username:
          </label>
          <input
            type="text"
            placeholder="Enter username"
            required
            className="input__field"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="login__label">
            Enter admin password:
          </label>
          <input
            type="password"
            placeholder="Enter password"
            required
            className="input__field"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            isLoading={isLoading}
            isDisabled={!username.length || !password.length}
          >
            Login
          </Button>
        </form>
      </div>
    </main>
  );
};
