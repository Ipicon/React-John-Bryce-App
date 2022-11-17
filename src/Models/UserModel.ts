import {RegisterOptions} from "react-hook-form";

class UserModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public username: string;
    public password: string;

    public static firstNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing first name"},
        minLength: {value: 4, message: "First name must be at least 4 characters"},
        maxLength: {value: 50, message: "First name must be less than 50 characters"},
    }

    public static lastNameValidation: RegisterOptions = {
        required: {value: true, message: "Missing last name"},
        minLength: {value: 4, message: "Last name must be at least 4 characters"},
        maxLength: {value: 50, message: "Last name must be less than 50 characters"},
    }

    public static usernameValidation: RegisterOptions = {
        required: {value: true, message: "Missing username"},
        minLength: {value: 4, message: "Username must be at least 4 characters"},
        maxLength: {value: 50, message: "Username name must be less than 50 characters"},
    }

    public static passwordValidation: RegisterOptions = {
        required: {value: true, message: "Missing password"},
        minLength: {value: 4, message: "Password must be at least 4 characters"},
        maxLength: {value: 50, message: "Password must be less than 50 characters"},
    }
}

export default UserModel;
