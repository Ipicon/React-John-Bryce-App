import {RegisterOptions} from "react-hook-form";

class CredentialsModel {
	public username: string;
    public password: string;

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

export default CredentialsModel;
