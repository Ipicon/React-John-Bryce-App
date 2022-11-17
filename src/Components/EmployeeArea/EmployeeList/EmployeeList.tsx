import "./EmployeeList.css";
import React, {SyntheticEvent, useEffect, useState} from "react";
import employeeService from "../../../Services/EmployeeService";
import EmployeeModel from "../../../Models/EmployeeModel";
import notifyService from "../../../Services/NotifyService";
import appConfig from "../../../Utils/AppConfig";
import {useNavigate} from "react-router-dom";
import usePageTitle from "../../../Utils/usePageTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";

function EmployeeList(): JSX.Element {
    usePageTitle("Employees List Page");

    const navigate = useNavigate();
    const [employeeList, setEmployeeList] = useState<EmployeeModel[]>([]);


    useEffect(() => {
        employeeService.getAllEmployees()
            .then(employees => setEmployeeList(employees))
            .catch(err => notifyService.error(err))
    }, []);

    const handleClick = (id: number) => {
        navigate(`/employees/details/${id}`)
    }

    const removeEmployee = async (event: SyntheticEvent, id: number) => {
        event.stopPropagation();
        const ok = window.confirm('Are you sure you want to remove?');
        if (!ok) return;

        try {
            await employeeService.deleteEmployee(id);
            notifyService.success("Employee was removed");
            setEmployeeList(employeeList.filter(employee => employee.id !== id));
        } catch (err) {
            notifyService.error(err);
        }
    }

    return (
        <div className="EmployeeList">
            {employeeList.length === 0 && <Spinner />}
            {employeeList.length !== 0 && <table className="Box">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Title</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Image</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {employeeList.map(employee =>
                    <tr onClick={() => handleClick(employee.id)} key={employee.id}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.title}</td>
                        <td>{employee.country}</td>
                        <td>{employee.city}</td>
                        <td>{employee.birthDate}</td>
                        <td><img src={appConfig.employeesImageUrl + employee.imageName} alt="employee"/></td>
                        <td onClick={(e) => removeEmployee(e, employee.id)}>❌</td>
                    </tr>
                )}
                </tbody>
            </table>}
        </div>
    );
}

export default EmployeeList;
