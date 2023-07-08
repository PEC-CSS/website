import React, { ChangeEvent, useState } from 'react';
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/register.module.scss";
import { errorText } from '../constants/errorText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import ErrorTextBox from '../components/register/ErrorTextBox';
import { IconButton, InputAdornment } from '@mui/material';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DialogPopup from '../components/common/DialogPopup/DialogPopup';
import CustomTextField from '../components/common/CustomTextField/CustomTextField';

function Register() {

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        branch: branchNames.length === 0 ? '' : branchNames[0],
        sid: '',
        email: '',
        password: '',
        confirmPassword: '',
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

        if (!isSidCorrect(formValues.sid) ||
            !arePasswordsMatching(formValues.password, formValues.confirmPassword) ||
            isPasswordStrong(formValues.password) < 2) {

            setError(true);
        } else {
            // make API calls
        }
    }

    return (
        <PageLayout title="Register | ACM at PEC">
            {
                error ? <DialogPopup
                    errorTitle={errorText.invalidFormData.title}
                    errorDescription={errorText.invalidFormData.description}
                    handleClose={() => setError(false)}
                />
                    : <></>
            }

            {/* Header */}
            <form className={styles.parent} onSubmit={handleSubmit}>

                <div className={styles.intro}>
                    <h1>Code Your Future: Register Today!</h1>
                    <div className={styles.introLine}>
                        You only need one PEC ACM ID.
                    </div>
                    <div className={styles.introLine}>
                        Already have an ID?
                        <Link href="/login" className={styles.link}> Log in </Link>
                    </div>
                </div>

                {/* Personal User Info */}
                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={styles.name}>
                            <div className={styles.fName}>
                            <CustomTextField
                                    name="firstName"
                                    label="First Name"
                                    variant="filled"
                                    onChange={handleChange}
                                    value={formValues.firstName}
                                    fullWidth={true}
                                    required={true} />
                            </div>
                            <div className={styles.lName}>
                                <CustomTextField
                                    name="lastName"
                                    label="Last Name"
                                    variant="filled"
                                    onChange={handleChange}
                                    value={formValues.lastName}
                                    fullWidth={true}
                                    required={true} />
                            </div>
                        </div>

                        <div className={styles.userDetails}>
                            <FormControl variant="filled" size="small" fullWidth={true}>
                                <InputLabel>Branch</InputLabel>
                                <Select
                                    name="branch"
                                    onChange={handleChange}
                                    value={formValues.branch}
                                    sx={{ height: "4em" }}
                                >
                                    {
                                        branchNames.map((branchName, id) => <MenuItem value={branchName} key={id} >{branchName}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>

                            <div>
                                <CustomTextField label="SID"
                                    name="sid"
                                    variant="filled"
                                    error={!isSidCorrect(formValues.sid)}
                                    onChange={handleChange}
                                    value={formValues.sid}
                                    fullWidth={true}
                                    required={true} />
                                {
                                    isSidCorrect(formValues.sid)
                                        ? <></>
                                        : <ErrorTextBox text={errorText.invalidSid} icon={<BiErrorCircle />} />
                                }
                            </div>
                        </div>
                    </div>

                </div>

                {/* User Account Details */}
                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={styles.accountDetails}>
                            <div className={`${styles.smallText} ${styles.smallHeading}`}>EMAIL ID</div>
                            <CustomTextField
                                name="email"
                                label="name@email.com"
                                variant="filled"
                                type="email"
                                onChange={handleChange}
                                value={formValues.email}
                                fullWidth={true}
                                required={true} />
                            <div className={styles.smallText}>This will be used to login from now on.</div>
                        </div>

                        <div className={styles.accountDetails}>
                            <CustomTextField
                                name="password"
                                label="Password"
                                variant="filled"
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChange}
                                error={isPasswordStrong(formValues.password) !== 2}
                                value={formValues.password}
                                InputProps={{
                                    endAdornment: (<InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                        </IconButton>
                                    </InputAdornment>)}
                                }
                                fullWidth={true}
                                required={true} />

                            {
                                isPasswordStrong(formValues.password) == 2
                                    ? <></>
                                    : <ErrorTextBox text={errorText.weakPassword[isPasswordStrong(formValues.password)]} icon={<BiErrorCircle />} />
                            }
                        </div>

                        <div className={styles.accountDetails}>
                            <CustomTextField
                                name="confirmPassword"
                                label="Confirm Password"
                                variant="filled"
                                type="password"
                                error={!arePasswordsMatching(formValues.password, formValues.confirmPassword)}
                                onChange={handleChange}
                                value={formValues.confirmPassword}
                                fullWidth={true}
                                required={true} />

                            {
                                arePasswordsMatching(formValues.password, formValues.confirmPassword)
                                    ? <></>
                                    : <ErrorTextBox text={errorText.unequalPasswords} icon={<BiErrorCircle />} />
                            }
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className={`${styles.buttonGroup} ${styles.flowSection}`}>
                    <div className={styles.registerButton}>
                        <button type="submit">Register</button>
                    </div>
                </div>
            </form>
        </PageLayout>
    )
}

export default Register;

const arePasswordsMatching = (password: string, confirmPassword: string): boolean => {
    if (confirmPassword.length === 0) {
        return true;
    }

    return password === confirmPassword;
}

const isSidCorrect = (sid: string): boolean => {
    if (!sid) {
        return true;
    } else if (sid.length !== 8) {
        return false;
    }

    for (let i = 0; i < sid.length; i++) {
        if (sid[i] < '0' || sid[i] > '9') {
            return false;
        }
    }

    return true;
}

const maxRepeatedCharacter = (text: string): number => {
    let currentRepeated = 1, maxRepeated = 1;
    for (let i = 1; i < text.length; i++) {
        if (text[i] == text[i - 1]) {
            currentRepeated++;
            maxRepeated = Math.max(maxRepeated, currentRepeated);
        } else {
            currentRepeated = 1;
        }
    }

    return maxRepeated;
}

const isPasswordStrong = (password: string): number => {
    // 0: small in length 
    // 1: repeated characters
    // 2: ok

    if (password.length === 0) {
        return 2;
    }

    const minimumPasswordLength = 8;
    const maximumRepeatedAllowed = 3;

    if (maxRepeatedCharacter(password) > maximumRepeatedAllowed) {
        return 0;
    } else if (password.length < minimumPasswordLength) {
        return 1;
    } else {
        return 2;
    }
}

const branchNames: string[] = [
    "CSE",
    "ECE",
    "EE",
    "MECH",
    "CIVIL",
    "CSEDS",
    "PROD"
]