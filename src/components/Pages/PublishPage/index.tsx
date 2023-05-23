import { useCookies } from "react-cookie";
import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminServices } from "../../../services/admin";
import { toast } from "react-hot-toast";
import { Button } from "../../UI";

export const PublishPage: React.FC = (): JSX.Element => {
  const [cookies, _] = useCookies(["access_token"]);
  const accessToken = cookies["access_token"];
  const navigate = useNavigate();

  const [title, setTItle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [allowUnsubscribe, setAllowUnsubsribe] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!accessToken) navigate("/admin/login");
  }, []);

  const publishNewsletter = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await AdminServices.publish(
      title,
      body,
      allowUnsubscribe,
      accessToken
    );
    if (res.success) {
      toast.success(res.message);
      setTItle("");
      setBody("");
    } else {
      toast.error(res.message);
      navigate("/admin/login");
    }
    setIsLoading(false);
  };

  return (
    <main>
      <div className="input__area">
        <form onSubmit={publishNewsletter} className="publish__form">
          <label htmlFor="title">Enter newsletter title:</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTItle(e.target.value)}
            name="title"
            required
            className="input__field title__input"
          />
          <label htmlFor="newsletter-body">Compose newsletter body:</label>
          <textarea
            name="newsletter-body"
            placeholder="Write markdown of the email that you want to send to your subscribers"
            rows={20}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <div className="check__area">
            <input
              type="checkbox"
              checked={allowUnsubscribe}
              onChange={() => setAllowUnsubsribe((allow) => !allow)}
            />
            <p>Include link to unsubscribe from newsletter</p>
          </div>
          <Button
            isLoading={isLoading}
            isDisabled={!title.length || !body.length}
            loadingText="Publishing"
            type="submit"
          >
            Publish newsletter
          </Button>
        </form>
      </div>
      <div className="preview__container">
        <h3 className="preview__text">Preview of your newsletter</h3>
        <div className="preview__area">
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
      </div>
    </main>
  );
};
