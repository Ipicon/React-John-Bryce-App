import "./Register.css";
import {useForm} from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import notifyService from "../../../Services/NotifyService";
import authService from "../../../Services/AuthService";
import {useNavigate} from "react-router-dom";

function Register(): JSX.Element {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<UserModel>();

    const send = async(user: UserModel) => {
        try {
            await authService.register(user);

            notifyService.success(`Welcome ${user.firstName}`);
            navigate('/home');
        } catch (err) {
            notifyService.error(err);
        }
    }

    return (
        <div className="Register Box">
			<h2>Register</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>First name: </label>
                <input type="text" {...register("firstName", UserModel.firstNameValidation)}/>
                <span>{errors.firstName?.message}</span>

                <label>Last name: </label>
                <input type="text" {...register("lastName", UserModel.lastNameValidation)}/>
                <span>{errors.lastName?.message}</span>

                <label>Username: </label>
                <input type="text" {...register("username", UserModel.usernameValidation)}/>
                <span>{errors.username?.message}</span>

                <label>Password: </label>
                <input type="password" {...register("password", UserModel.passwordValidation)}/>
                <span>{errors.password?.message}</span>

                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
