import NewsLetterIllustration from "../../assets/newsletter.svg";
import "./styles.css";

export const SubscribePage: React.FC = (): JSX.Element => {
  return (
    <main>
      <div className="hero-section">
        <img
          src={NewsLetterIllustration}
          className="illustration"
          alt="newsletter illustration"
        />
        <h3>
          Subscribe to my weekly newsletter for tech and all about software
          engineering
        </h3>
      </div>
      <div className="cta-section">
        <input type="text" placeholder="Enter email" />
      </div>
    </main>
  );
};
