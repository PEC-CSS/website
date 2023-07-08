import React, { ChangeEvent, useState } from 'react';
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/register.module.scss";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BiErrorCircle } from "react-icons/bi"
import ErrorTextBox from '../components/register/ErrorTextBox';
import { IconButton, InputAdornment } from '@mui/material';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

function Login() {

    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>
        | SelectChangeEvent
        | React.ChangeEvent<HTMLTextAreaElement
            | HTMLInputElement>) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // check if login credentials are valid
        if (true) {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
        } else {
            // make API calls
        }
    }

    return (
        <PageLayout title="Login | ACM at PEC">

            {/* Header */}
            <form className={styles.parent} onSubmit={handleSubmit}>

                <div className={styles.intro}>
                    <h1>Login</h1>
                </div>

                {/* User Account Details */}
                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={styles.accountDetails}>
                            <TextField
                                name="username"
                                label="Username"
                                variant="filled"
                                onChange={handleChange}
                                value={formValues.username}
                                fullWidth
                                required />
                        </div>
                        <div className={styles.accountDetails}>
                            <TextField
                                name="password"
                                label="Password"
                                variant="filled"
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChange}
                                value={formValues.password}
                                InputProps={{
                                    endAdornment: (<InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                        </IconButton>
                                    </InputAdornment>)
                                }}
                                fullWidth
                                required />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className={`${styles.buttonGroup} ${styles.flowSection}`}>
                    {error
                        ? <ErrorTextBox text={errorText.incorrectEntry} icon={<BiErrorCircle />} />
                        : <></>
                    }
                    <div className={styles.registerButton}>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </form>
        </PageLayout>
    )
}

export default Login;

const errorText = {
    incorrectEntry: "Login credentials are incorrect."
}
