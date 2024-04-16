import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            <section className="flex flex-1 justify-center items-center flex-col h-screen p-4">
                <Outlet />
            </section>
            <section className="w-1/2 h-screen hidden xl:block">
                <img
                    src="/assets/images/form-bg-1.jpg"
                    alt="logo"
                    className="h-full w-full bg-cover bg-center"
                />
            </section>
        </>
    );
};

export default AuthLayout;
