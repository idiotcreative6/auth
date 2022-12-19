import React, { useState } from 'react'
import Card from '../../components/card/Card'
import styles from "./auth.module.scss"
import { Link } from 'react-router-dom'
import { MdPassword } from 'react-icons/md'
import PasswordInput from '../../components/passwordInput/PasswordInput'

const initialState = {
    password: "",
    password2: ""
}

const Reset = () => {
    const [FormData, setFormData] = useState(initialState)
    const { password, password2 } = FormData

    const handleInputChange = () => { }
    const loginUser = () => { }

    return (
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className='--flex-center'>

                        <MdPassword size={35} color="#999" />

                    </div>
                    <h2>Reset Password</h2>

                    <form onSubmit={loginUser}>
                        <PasswordInput
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleInputChange} />
                        <PasswordInput
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={handleInputChange} />


                        <button type='submit' className='--btn --btn-primary --btn-block'>Get Reset Password</button>
                        <div className={styles.links}>
                            <p>
                                <Link to="/">- Home</Link>
                            </p>
                            <p>
                                <Link to="/login">- Login</Link>
                            </p>
                        </div>
                    </form>


                </div>
            </Card>
        </div>
    )
}

export default Reset