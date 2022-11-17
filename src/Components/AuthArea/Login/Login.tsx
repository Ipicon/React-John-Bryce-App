import "./Login.css";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import CredentialsModel from "../../../Models/CredentialsModel";
import {authStore} from "../../../Redux/AuthState";

function Login(): JSX.Element {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<CredentialsModel>();

    const send = async(user: CredentialsModel) => {
        try {
            await authService.login(user);

            notifyService.success(`Welcome back ${authStore.getState().user?.firstName}`);
            navigate('/home');
        } catch (err) {
            notifyService.error(err);
        }
    }

    return (
        <div className="Register Box">
            <h2>Login</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>Username: </label>
                <input type="text" {...register("username", CredentialsModel.usernameValidation)}/>
                <span>{errors.username?.message}</span>

                <label>Password: </label>
                <input type="password" {...register("password", CredentialsModel.passwordValidation)}/>
                <span>{errors.password?.message}</span>

                <button>Register</button>
            </form>
        </div>
    );
}

export default Login;
