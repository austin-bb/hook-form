import React, { useState } from 'react'

const LoginForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPWHandler = (e) => {
        setConfirmPW(e.target.value)
    }

    return (
        <div>
            <form>
                <div>
                    <label for="firstname">First Name: </label>
                    <input id="firstname" type="text" name="firstName" onChange={ firstNameHandler }/>
                </div>
                <div>
                    <label for="lastname">Last Name: </label>
                    <input id="lastname" type="text" name="lastName" onChange={ lastNameHandler }/>
                </div>
                <div>
                    <label for="email"> Email: </label>
                    <input id="email" type="text" name="email" onChange={ emailHandler }/>
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input id="password" type="text" name="password" onChange={ passwordHandler }/>
                </div>
                <div>
                    <label for="confirmPW">Confirm Password: </label>
                    <input id="confirmPW" type="text" name="confirmPW" onChange={ confirmPWHandler }/>
                </div>
            </form>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPW }</p>
        </div>
    )
}

export default LoginForm