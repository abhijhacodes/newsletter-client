import { Props } from "./types";
import "./styles.css";

export const Button: React.FC<Props> = ({
  children,
  onClick = () => console.log("button clicked"),
  isLoading,
  loadingText,
  isDisabled,
  type = "button",
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${isLoading ? "loading" : ""} ${
        isDisabled ? "disabled" : ""
      }`}
      type={type}
    >
      {isLoading ? (
        <>
          {loadingText}
          <span className="spinner"></span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
