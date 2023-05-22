import { Props } from "./types";

export const Button: React.FC<Props> = ({
  children,
  onClick,
  isLoading,
  isDisabled,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${isLoading ? "loading" : ""} ${
        isDisabled ? "disabled" : ""
      }`}
    >
      {children}
    </button>
  );
};
