import { Props } from "./types";
import "./styles.css";

export const Button: React.FC<Props> = ({
  children,
  onClick = () => console.log("button clicked"),
  isLoading,
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
      {children}
    </button>
  );
};
