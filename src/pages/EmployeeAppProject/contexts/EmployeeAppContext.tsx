import {
  useState,
  createContext,
  PropsWithChildren,
  ReactHTMLElement,
  ReactNode,
  ChildContextProvider,
} from "react";

import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types";

export interface EmployeeContextType {
  employee: Employee;
  setEmployee: (e: Employee) => void;
}

export const EmployeeAppContext = createContext<EmployeeContextType>({
  employee: {
    name: "",
    surName: "",
    age: 0,
    jobPosition: "",
  },
  setEmployee: () => {},
});

export const EmployeeAppContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [employee, setEmployee] = useState<Employee>({
    name: "",
    surName: "",
    age: 0,
    jobPosition: "",
  });

  return (
    <EmployeeAppContext.Provider
      value={{ employee: employee, setEmployee: setEmployee }}
    >
      {children}
    </EmployeeAppContext.Provider>
  );
};
