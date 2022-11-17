import EmployeeModel from "../Models/EmployeeModel";
import {createStore} from "redux";

export class EmployeeState {
    public employees: EmployeeModel[] = [];
}

export type EmployeeActionType = "FetchEmployees" | "AddEmployee" | "UpdateEmployee" | "DeleteEmployee";

export interface EmployeeAction {
    type: EmployeeActionType,
    payload: EmployeeModel | EmployeeModel[] | number,
}

export const fetchEmployeesAction = (products: EmployeeModel[]): EmployeeAction => {
    return {
        type: "FetchEmployees",
        payload: products
    };
}

export const addEmployeeAction = (product: EmployeeModel): EmployeeAction => {
    return {
        type: "AddEmployee",
        payload: product
    };
}

export const updateEmployeeAction = (product: EmployeeModel): EmployeeAction => {
    return {
        type: "UpdateEmployee",
        payload: product
    };
}

export const deleteEmployeeAction = (id: number): EmployeeAction => {
    return {
        type: "DeleteEmployee",
        payload: id
    };
}

export const employeeReducer = (currentState = new EmployeeState(), action: EmployeeAction): EmployeeState => {
    const newState = {...currentState};

    switch (action.type) {
        case "FetchEmployees":
            newState.employees = action.payload as EmployeeModel[];
            break;

        case "AddEmployee":
            newState.employees.push(action.payload as EmployeeModel);
            break;

        case "UpdateEmployee":
            const indexToUpdate = newState.employees.findIndex(employee => employee.id === (action.payload as EmployeeModel).id);

            if (indexToUpdate !== -1) {
                newState.employees[indexToUpdate] = action.payload as EmployeeModel;
            }

            break;

        case "DeleteEmployee":
            const indexToDelete = newState.employees.findIndex(employee => employee.id === action.payload);

            if (indexToDelete !== -1) {
                newState.employees.splice(indexToDelete, 1);
            }

            break;

        default:
            return newState;
    }

    return newState;
}

export const employeeStore = createStore(employeeReducer);