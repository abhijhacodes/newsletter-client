import { Button } from "../../UI";
import NewsLetterIllustration from "../../../assets/newsletter.svg";
import "./styles.css";

export const SubscribePage: React.FC = (): JSX.Element => {
  const subscribeToNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <form onSubmit={subscribeToNewsletter}>
            <input
              type="email"
              placeholder="Enter email"
              className="email__input"
              required
            />
            <Button isLoading={false} type="submit" loadingText="Subscribing">
              Subscribe now
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
