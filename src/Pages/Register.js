import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div>
            <head>
        <title>Sign In</title>
        <link rel="stylesheet" href="register.css" media="screen" />
        <meta name="viewport" content="width=1100" />
    </head>

    <body>
    <h2> Sign in/up to PasarGo!</h2>
    <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To start shopping with us please login with your personal info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, PasarGoer!</h1>
                    <p>Enter your personal details and kickstart your PasarGo! journey with us</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </body>
    <footer>
        <p>
        Check out PasarGo!
        </p>
    </footer>
        </div>
    )
}

export default Register
