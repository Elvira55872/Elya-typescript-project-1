import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, ButtonWrapper } from "./styles";

const Homework08 = () => {
  return (
    <PageWrapper>
      <Input
        id="gf5dfr43vc5bbfb76"
        name="name"
        type="name"
        placeholder="write your name"
        label="Name"
        disabled={true}
      />
      <Input
        id="hgf563gegvzd56"
        name="surname"
        type="surname"
        placeholder="write your surname"
        label="Surname"
        disabled={false}
        error="Some error"
      />
      <ButtonWrapper>
        <Button name="Click" onClick={() => {}} disabled={true} />
        <Button name="Click" onClick={() => {}} isRed={true} />
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default Homework08;
