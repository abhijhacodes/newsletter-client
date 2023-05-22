import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  onClick: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}
