import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  ButtonContainer,
  ClientPhoto,
  ClientName,
} from "./styles";
import Button from "components/Button/Button";

function Client_1() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ClientPhoto
        src="https://avatanplus.com/files/resources/original/57ad8f4f484671567df7cdc0.png"
        alt="Client 1 photo"
      />
      <ClientName> Rooster 1</ClientName>

      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </PageWrapper>
  );
}

export default Client_1;
