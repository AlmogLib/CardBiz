import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserContext } from "../App";
import User from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbacks";
import { checkUser } from "../services/userServices";

interface SignInProps {

}

const SignIn: FunctionComponent<SignInProps> = () => {
    let navigate = useNavigate();
    let UserCtx = useContext(UserContext);

    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(8)
        }),
        onSubmit: (values: User) => {
            checkUser(values).then((res) => {
                if (res.data.length) {
                    const user = res.data[0];
                    navigate("/profile");
                    UserCtx.changeUser({ ...user, isLoggedIn: true })
                    sessionStorage.setItem("userId", JSON.stringify(user.id));
                    successMsg("You logged in successfully");
                }
                else {
                    errorMsg("Wrong email or password");
                }
            })
                .catch((err) => console.log(err))
        }
    })
    return (<>
        <div className="container mt-5 col-md-3 text-center">
            <h3 className="display-3 mb-4">Sign In</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    {formik.touched.email && formik.errors.email && (
                        <small className="text-danger">{formik.errors.email}</small>
                    )}
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    {formik.touched.password && formik.errors.password && (
                        <small className="text-danger">{formik.errors.password}</small>
                    )}
                </div>
                <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn btn-info my-3 w-100">
                    Login
                </button>
            </form>
            <Link to="/signUp">New User? Register here</Link>
        </div>

    </>);
}

export default SignIn;


