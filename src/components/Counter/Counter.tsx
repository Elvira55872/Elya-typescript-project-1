import { CounterWrapper, ButtonControl, Count } from "./styles";

import Button from "components/Button/Button";

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({ count, onPlus, onMinus }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </CounterWrapper>
  );
}

export default Counter;
