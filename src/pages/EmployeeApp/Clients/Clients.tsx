import { useNavigate } from "react-router-dom";

import { PageWrapper, ButtonContainer, ClientsList, Link , Titel} from "./styles";
import Button from "components/Button/Button";

function Clients() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <PageWrapper>
      <Titel>Clients of the company</Titel>
      <ClientsList>
        <li>
          <Link to="/clients/client_1">Rooster 1</Link>
        </li>
        <li>
          <Link to="/clients/client_2">Rooster 2</Link>
        </li>
        <li>
          <Link to="/clients/client_3">Rooster 3</Link>
        </li>
      </ClientsList>
      <ButtonContainer>
        <Button name="Home Page" onClick={goToHomePage} />
      </ButtonContainer>
    </PageWrapper>
  );
}

export default Clients;
