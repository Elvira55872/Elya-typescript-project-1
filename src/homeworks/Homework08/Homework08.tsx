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
      <ButtonWrapper>
        <Button name="Click" onClick={() => {}} />{" "}
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default Homework08;
