import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "../../UI";
import "./styles.css";
import NewsLetterIllustration from "../../../assets/newsletter.svg";
import { NewsletterServices } from "../../../apiCalls/subscribe";

export const SubscribePage: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const subscribeCallback = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await NewsletterServices.subscribe(email);

    if (res.success) {
      toast.success(res.message);
      setEmail("");
    } else {
      toast.error(res.message);
    }
    setIsLoading(false);
  };

  return (
    <main>
      <div className="left__panel">
        <div className="hero__section">
          <img
            src={NewsLetterIllustration}
            className="illustration"
            alt="newsletter illustration"
          />
          <h2 className="hero__text">
            Subscribe to my <u>weekly newsletter</u> for tech and all about
            software engineering
          </h2>
        </div>
      </div>
      <div className="right__panel">
        <div className="cta__section">
          <form onSubmit={subscribeCallback}>
            <input
              type="email"
              placeholder="Enter email"
              className="email__input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              loadingText="Subscribing"
              isLoading={isLoading}
              isDisabled={email.length === 0}
            >
              Subscribe now
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
