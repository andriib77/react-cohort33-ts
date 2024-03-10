import { Link } from "react-router-dom";
import { ClientsPageTitle, ClientsWrapper } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <ClientsPageTitle>Clients</ClientsPageTitle>
      <Link to={"/clients/facebook"}>FaceBook</Link>
      <Link to={"/clients/toyota"}>Toyota</Link>
      <Link to={"/clients/apple"}>Apple</Link>
    </ClientsWrapper>
  );
}

export default Clients;
