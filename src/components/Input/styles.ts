import styled from "@emotion/styled";

interface StyledInputProps {
  $error: string | undefined;
}

const getStyledInputBorder = (error: string | undefined) =>{
  if (error === "Some error"){
    return "red"
  } else if ( error === undefined){
    return "#3f3f3f"
  }
}

const getInputColor = (disabled: boolean | undefined) => {
  if (disabled) {
    return "gray";
  } else {
    return "white";
  }
};

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled("label")`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled("input")<StyledInputProps>`
  width: 100%;
  height: 50px;
  border: 1px solid ${({$error})=> getStyledInputBorder($error)};
  border-radius: 4px;
  padding: 12px;
  outline: none;
  background-color: ${({ disabled }) => getInputColor(disabled)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
