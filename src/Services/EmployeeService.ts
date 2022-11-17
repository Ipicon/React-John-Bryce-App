import EmployeeModel from "../Models/EmployeeModel";
import appConfig from "../Utils/AppConfig";
import axios from "axios";
import {deleteEmployeeAction, employeeStore, fetchEmployeesAction} from "../Redux/EmployeeState";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        let employees = employeeStore.getState().employees;

        if (employees.length === 0) {
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
            employees = response.data;

            employeeStore.dispatch(fetchEmployeesAction(employees));
        }


        return employees;
    }

    public async getEmployeeById(id: number): Promise<EmployeeModel> {
        let employee = employeeStore.getState().employees.find(employee => employee.id === id);

        if (!employee) {
            const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
            employee = response.data;
        }

        return employee;
    }

    public async deleteEmployee(id: number): Promise<void> {
        await axios.delete<EmployeeModel>(appConfig.employeesUrl + id);
        employeeStore.dispatch(deleteEmployeeAction(id));
    }
}

const employeeService = new EmployeeService();

export default employeeService;
