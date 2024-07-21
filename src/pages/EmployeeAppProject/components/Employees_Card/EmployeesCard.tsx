import { useContext } from "react";
import { EmployeeAppContext } from "pages/EmployeeAppProject/contexts/EmployeeAppContext";
import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles";

function Employees_Card() {
const { employee } = useContext(EmployeeAppContext);
console.log(employee);

  return (
    <EmployeesCard>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{employee.name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{employee.surName}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Age</TextLabel>
        <TextContent>{employee.age}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{employee.jobPosition}</TextContent>
      </TextDiv>
    </EmployeesCard>
  );
}

export default Employees_Card;