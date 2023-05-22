import { useParams } from "react-router-dom";
import "./styles.css";

export const UnsubscribePage = (): JSX.Element => {
  const { subscription_id } = useParams();

  return <h1>Unsubscribe page: {subscription_id}</h1>;
};
