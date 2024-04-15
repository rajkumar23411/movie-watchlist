import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import FormContainer from "../../components/form/FormContainer";
import { useAuth } from "../../context/AuthContext";
import toaster from "react-hot-toast";
import { useEffect } from "react";
const Login = () => {
    const { email, setEmail, login, error, success } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    useEffect(() => {
        if (error) {
            toaster.error(error);
        }
        if (success) {
            toaster.success(success);
        }
    }, [error, success]);
    return (
        <div className="sm:w-420 flex-center flex-col">
            <Logo />
            <div className="mt-10 text-center">
                <h3 className="h3-semibold md:h2-semibold ">
                    Log in to your account
                </h3>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    Welcome back! Enter your registered email id to continue!
                </p>
            </div>
            <div className="mt-10 w-full">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <FormContainer>
                        <Label label={"Email"} />
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormContainer>
                    <PrimaryBtn handleClick={handleSubmit}>Log in</PrimaryBtn>
                    <div className="text-center mt-6 base-regular">
                        {`Don't`} have an account?&nbsp;
                        <Link
                            to={"/signup"}
                            className="text-primary-500 hover:underline hover:text-primary-600"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
