import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
  type?: "submit" | "button";
}
