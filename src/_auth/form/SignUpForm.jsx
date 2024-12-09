const SignUpForm = () => {
    return (
        <div className="auth-form bg-primary fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
        xl:right-64 top-32 justify-center items-center h-96">
            <form action="">
                <h1>Register</h1>
                <div className="input-field">
                    <label>Full Name: 
                            <input
                                type="text"
                                id="uName"
                            />
                    </label>
                    <br />
                    <label>User Name: 
                        <input
                            type="text"
                            id="uName"
                        />
                    </label>
                    <br />
                    <label>Password: 
                        <input
                            type="text"
                            id="password"
                        />
                    </label>
                    <br />
                    <label>Email: 
                        <input
                            type="text"
                            id="password"
                        />
                    </label>
                </div>
                <button className="border-[1px] mt-7">SignUP</button>
            </form>
        </div>
    )
}

export default SignUpForm