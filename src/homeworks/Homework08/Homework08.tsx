import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, ButtonWrapper } from "./styles";

const Homework08 = () => {
  return (
    <PageWrapper>
      <Input
        id="gfd54FDcfd4DSXc4"
        name="greeting"
        type="greeting"
        placeholder="write your greeting"
        label="normal input"
      />
      <Input
        id="gf5dfr43vc5bbfb76"
        name="name"
        type="name"
        placeholder="write your name"
        label="disabled input"
        disabled={true}
      />
      <Input
        id="hgf563gegvzd56"
        name="surname"
        type="surname"
        placeholder="write your surname"
        label="error input"
        error="Some error"
      />
      <ButtonWrapper>
        <Button name="normal button" onClick={() => {}} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button name="disabled button" onClick={() => {}} disabled={true} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button name="red button" onClick={() => {}} isRed={true} />
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default Homework08;
