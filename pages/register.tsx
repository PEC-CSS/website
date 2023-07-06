import React, { ChangeEvent, useState } from 'react';
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/register.module.scss";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from "next/link";

function Register() {

    // TODO: Refactor branch name array
    const branchNames = [
        "CSE",
        "ECE",
        "EE",
        "MECH",
        "CIVIL",
        "CSEDS",
        "PROD"
    ]

    const unequalPasswordWarningText = "The passwords you entered do not match.";

    const [branch, setBranch] = useState(branchNames.length === 0 ? "" : branchNames[0]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sid, setSid] = useState('');


    const handleBranchChange = (event: SelectChangeEvent) => {
        setBranch(event.target.value);
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }

    const handleSidChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSid(event.target.value);
    }

    const arePasswordsMatching = () => {
        if (confirmPassword.length === 0) {
            return false;
        }

        return password !== confirmPassword;
    }

    const isSidCorrect = () => {
        try {   
            parseInt(sid);
            return sid.length === 8;
        } catch (e) {
            return false;
        }
    }

    const handleSubmit = () => {

    }

    return (
        <PageLayout title="Register | ACM at PEC">

            <form className={styles.parent}>

                <div className={styles.intro}>
                    <h1>Code Your Future: Register Today!</h1>
                    <div className={styles.introLine}>
                        One PEC ACM ID is all you need.
                    </div>
                    <div className={styles.introLine}>
                        Already have an ID?
                        <Link href="/login" className={styles.link}> Log in </Link>
                    </div>
                </div>

                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={styles.name}>
                            <div className={styles.fName}>
                                <TextField label="First Name" variant="filled" fullWidth required />
                            </div>
                            <div className={styles.lName}>
                                <TextField label="Last Name" variant="filled" fullWidth required />
                            </div>
                        </div>

                        <div className={styles.userDetails}>
                            <FormControl variant="filled" size="small" fullWidth>
                                <InputLabel>Branch</InputLabel>
                                <Select
                                    onChange={handleBranchChange}
                                    value={branch}
                                    sx={{ height: "4em" }}
                                >
                                    {
                                        branchNames.map((branchName, id) => <MenuItem value={branchName} key={id}>{branchName}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>

                            <div>
                                <TextField label="SID" 
                                           variant="filled" 
                                           error={!isSidCorrect()}
                                           onChange={handleSidChange}
                                           value={sid}
                                           fullWidth 
                                           required />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={styles.accountDetails}>
                            <TextField label="Username" variant="filled" fullWidth required />
                            <div className={styles.smallText}>This will be used to login from now on.</div>
                        </div>
                        <div className={styles.accountDetails}>
                            <TextField label="name@email.com" variant="filled" type="email" fullWidth required />
                        </div>
                        <div className={styles.accountDetails}>
                            <TextField label="Password"
                                variant="filled"
                                type="password"
                                onChange={handlePasswordChange}
                                fullWidth required />
                        </div>

                        <div className={styles.accountDetails}>
                            <TextField label="Confirm Password"
                                variant="filled"
                                type="password"
                                error={arePasswordsMatching()}
                                onChange={handleConfirmPasswordChange}
                                fullWidth required />

                            {
                                !arePasswordsMatching() 
                                    ? <></>
                                : <span className={`${styles.errorText} ${styles.smallText}`}>{unequalPasswordWarningText}</span>
                            }
                        </div>
                    </div>

                </div>

                <div className={styles.buttonGroup}>
                    <div className={styles.registerButton}>
                        <button>Register</button>
                    </div>
                </div>
            </form>
        </PageLayout>
    )
}

export default Register;