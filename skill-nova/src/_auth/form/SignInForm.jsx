const SignInForm = () => {
    return (
        <div className="auth-form">
            <form action="">
                <h1>Log In</h1>
                <div className="input-field">
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
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default SignInForm