import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            {/* <h1>This is AuthLayout</h1> */}
            <section>
                <Outlet />
            </section>
        </>
    )
}

export default AuthLayout;