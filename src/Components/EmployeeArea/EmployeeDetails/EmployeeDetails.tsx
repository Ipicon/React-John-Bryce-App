import "./EmployeeDetails.css";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import employeeService from "../../../Services/EmployeeService";
import EmployeeModel from "../../../Models/EmployeeModel";
import notifyService from "../../../Services/NotifyService";
import appConfig from "../../../Utils/AppConfig";
import Spinner from "../../SharedArea/Spinner/Spinner";

function EmployeeDetails(): JSX.Element {
    const params = useParams();
    const [employee, setEmployee] = useState<EmployeeModel>();

    useEffect(() => {
        employeeService.getEmployeeById(+params.id!)
            .then(response => setEmployee(response))
            .catch(err => notifyService.error(err));
    }, [params.id])

    return (
        <div className="EmployeeDetails">
            {!employee && <Spinner/>}
            {employee && <>
                <h3>First Name: {employee?.firstName}</h3>
                <h3>Last Name:{employee?.lastName}</h3>
                <h3>Title: {employee?.title}</h3>
                <h3>Country: {employee?.country}</h3>
                <h3>City: {employee?.city}</h3>
                <h3>Date: {employee?.birthDate}</h3>
                <img src={appConfig.employeesImageUrl + employee?.imageName} alt="employee"/>\

                <br/>
                <br/>

                <Link to="/employees">Back</Link>
            </>}
        </div>
    );
}

export default EmployeeDetails;
