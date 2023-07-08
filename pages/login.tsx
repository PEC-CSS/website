import React, { ChangeEvent, useEffect, useState } from 'react';
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/register.module.scss";
import { errorText } from '../constants/errorText';
import { SelectChangeEvent } from '@mui/material/Select';
import { BiErrorCircle } from "react-icons/bi"
import ErrorTextBox from '../components/register/ErrorTextBox';
import { IconButton, InputAdornment } from '@mui/material';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import CustomTextField from '../components/common/CustomTextField/CustomTextField';
import DialogPopup from '../components/common/DialogPopup/DialogPopup';
import Link from 'next/link';

function Login() {

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState({
        error: false,
        title: '',
        description: '',
    });

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
            setError({
                ...error,
                error: true
            });

        } else {
            // make API calls
        }
    }

    useEffect(() => {
        console.log(error)

    }, [error])

    return (
        <PageLayout title="Login | ACM at PEC">

            {/* Header */}
            <form className={styles.parent} onSubmit={handleSubmit}>
                {
                    error.error ? <DialogPopup
                        errorTitle={errorText.invalidFormData.title}
                        errorDescription={errorText.invalidFormData.description}
                        handleClose={() => setError({
                            ...error,
                            error: false
                        })}
                    />
                        : <></>
                }

                <div className={styles.intro}>
                    <h1>Login to PEC ACM</h1>
                    <div style={{marginTop: "7px"}}>
                        Don{`'`}t have an account? &nbsp;
                        <Link href='/register' className={styles.link}>
                            Register
                        </Link>
                    </div>
                </div>

                {/* User Account Details */}
                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={`${styles.smallText} ${styles.smallHeading}`}>EMAIL ID</div>
                        <div className={styles.accountDetails}>
                            <CustomTextField
                                name="email"
                                type="email"
                                label="email@name.com"
                                variant="filled"
                                onChange={handleChange}
                                value={formValues.email}
                                fullWidth={true}
                                required={true} />
                        </div>
                        <div className={styles.accountDetails}>
                            <CustomTextField
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
                                fullWidth={true}
                                required={true} />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className={`${styles.buttonGroup} ${styles.flowSection}`}>
                    <div className={styles.registerButton}>
                        <button type="submit">Login</button>
                    </div>

                </div>
            </form>
        </PageLayout>
    )
}

export default Login;