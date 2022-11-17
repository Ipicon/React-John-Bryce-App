import "./TotalEmployees.css";
import {useEffect, useState} from "react";
import {employeeStore} from "../../../Redux/EmployeeState";
function TotalEmployees(): JSX.Element {
    const [count, setCount] = useState<number>();

    useEffect(() => {
        setCount(employeeStore.getState().employees.length);

        employeeStore.subscribe(() => {
            setCount(employeeStore.getState().employees.length);
        })
    }, [])

    return (
        <div className="TotalEmployees Box">
            <span>Total Employees: {count}</span>
        </div>
    );
}

export default TotalEmployees;
