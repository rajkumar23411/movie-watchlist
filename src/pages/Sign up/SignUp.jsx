import PrimaryBtn from "../../components/button/PrimaryBtn";
import Logo from "../../components/logo/Logo";
import Label from "../../components/form/Label";
import { Link } from "react-router-dom";
import Input from "../../components/form/Input";
import FormContainer from "../../components/form/FormContainer";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
    const { register, email, setEmail } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        register();
        setEmail("");
    };
    return (
        <div className="w-full sm:w-420 flex-center flex-col ">
            <Logo />
            <div className="mt-10 text-center">
                <h3 className="h3-semibold md:h2-semibold ">
                    Create a new account
                </h3>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    To get started, enter your email address!
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
                    <PrimaryBtn handleClick={handleSubmit}>Submit</PrimaryBtn>
                    <div className="text-center mt-6 base-regular">
                        Already have an account?&nbsp;
                        <Link
                            to={"/login"}
                            className="text-primary-500 hover:underline hover:text-primary-600"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
