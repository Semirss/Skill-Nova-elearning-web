const SignUpForm = () => {
    return (
        <div className="auth-form">
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
                <button>SignUP</button>
            </form>
        </div>
    )
}

export default SignUpForm