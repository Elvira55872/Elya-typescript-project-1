import { useNavigate } from "react-router-dom";

import {
  PageWrapper,
  ButtonContainer,
  ClientPhoto,
  ClientName,
} from "./styles";
import Button from "components/Button/Button";

function Client_2() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ClientPhoto
        src="https://i.pinimg.com/originals/54/71/19/5471195b668825aae4e639206cf867b6.png"
        alt="Client 2 photo"
      />
      <ClientName> Rooster 2</ClientName>

      <ButtonContainer>
        <Button name="Go back" onClick={goBack} />
      </ButtonContainer>
    </PageWrapper>
  );
}

export default Client_2;
