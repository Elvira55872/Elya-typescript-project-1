import { InputWrapper, InputLabel, InputComponent } from "./styles";
import { InputProps } from "./types";

function Input({
  id,
  name,
  type,
  placeholder,
  label,
  disabled = false,
  error = undefined,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        // !! error подсвечивается красным, не могу решить эту проблему, уже все перепроверила и переписала как в разборе ДЗ
        // !! помоги пожалуйста
         error={error}
      />
    </InputWrapper>
  );
}

export default Input;
