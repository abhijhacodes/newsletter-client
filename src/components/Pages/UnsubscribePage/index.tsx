import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Button } from "../../UI";
import "./styles.css";
import { NewsletterServices } from "../../../apiCalls/subscribe";
import ByeIllustration from "../../../assets/bye.svg";
import ErrorIllustration from "../../../assets/error.svg";

export const UnsubscribePage = (): JSX.Element => {
  const { subscriptionId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    unSubscribeFromNewsLetter();
  }, []);

  const unSubscribeFromNewsLetter = async () => {
    setIsLoading(true);
    const res = await NewsletterServices.unsubscribe(subscriptionId ?? "");
    setMessage(res.message);
    setIsError(!res.success);
    setIsLoading(false);
  };

  return (
    <main>
      <div className="content">
        {isLoading ? (
          <div className="loading__spinner"></div>
        ) : (
          <>
            <img
              src={isError ? ErrorIllustration : ByeIllustration}
              className="illustration"
              alt="illustration"
            />
            <h2 className="hero__text">{message}</h2>
            <Link to="/">
              <Button>Subscribe {isError ? "now" : "again"}</Button>
            </Link>
          </>
        )}
      </div>
    </main>
  );
};
