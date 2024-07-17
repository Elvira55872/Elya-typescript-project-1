import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  ButtonContainer,
  ClientPhoto,
  ClientName,
} from "./styles";
import Button from "components/Button/Button";

function Client_3() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ClientPhoto
        src="https://avatanplus.com/files/resources/original/58596c08760a21591d4e0123.png"
        alt="Client 3 photo"
      />
      <ClientName> Rooster 3</ClientName>

      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </PageWrapper>
  );
}

export default Client_3;
