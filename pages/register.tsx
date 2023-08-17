import React, { ChangeEvent, useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/register.module.scss";
import { ERRORTEXT } from "../constants/errorText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ErrorTextBox from "../components/register/ErrorTextBox";
import { IconButton, InputAdornment } from "@mui/material";
import "react-confirm-alert/src/react-confirm-alert.css";
import DialogPopup from "../components/common/DialogPopup/DialogPopup";
import CustomTextField from "../components/common/CustomTextField/CustomTextField";
import { register } from "../repository/auth";
import { useLocalStorage } from "usehooks-ts";
import { Common } from "../constants/common";
import { useRouter } from "next/router";
import {setCookie, parseCookies} from "nookies";
import { GetServerSidePropsContext } from "next";

function Register() {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        branch: branchNames.length === 0 ? "" : branchNames[0],
        sid: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [_, setAuthorization] = useLocalStorage<string | null>(
        Common.AUTHORIZATION,
        null
    );

    const [error, setError] = useState({
        error: false,
        title: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (
        event:
            | ChangeEvent<HTMLInputElement>
            | SelectChangeEvent
            | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (
            !isSidCorrect(formValues.sid) ||
            !arePasswordsMatching(
                formValues.password,
                formValues.confirmPassword
            ) ||
            isPasswordStrong(formValues.password) < 2 ||
            !isEmailCorrect(formValues.email)
        ) {
            setError({
                ...error,
                error: true,
            });
        } else {
            const response = await register({ ...formValues });
            if (response.error || !response.jwtToken) {
                setError({
                    title: "Error",
                    description: response.error?.message || "",
                    error: true,
                });
                setLoading(false);
                return;
            }
            const jwtToken = response.jwtToken;
            setAuthorization(jwtToken);
            setCookie(null, Common.AUTHORIZATION, jwtToken, {
                path: "/",
                sameSite: "strict",
                maxAge:  3 * 24 * 60 * 60, // expires in 3 days
            })
        }
        setLoading(false);
        router.push("/verify/welcome");
    };


    return (
        <PageLayout
            title="Register | ACM at PEC"
            description="Register yourself to this wonderful society of coders."
        >
            {error.error ? (
                <DialogPopup
                    errorTitle={error.title ?? ERRORTEXT.invalidFormData.title}
                    errorDescription={
                        error.description ??
                        ERRORTEXT.invalidFormData.description
                    }
                    handleClose={() =>
                        setError({
                            ...error,
                            error: false,
                        })
                    }
                />
            ) : (
                <></>
            )}

            {/* Header */}
            <form className={styles.parent} onSubmit={handleSubmit}>
                <div className={styles.intro}>
                    <h1>Code Your Future: Register Today!</h1>
                    <div className={styles.introLine}>
                        You only need one PEC ACM ID.
                    </div>
                    <div className={styles.introLine}>
                        Already have an ID?
                        <Link
                            href="/login"
                            className={styles.link}
                            aria-label="Login"
                        >
                            {" "}
                            Log in{" "}
                        </Link>
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
                                    required={true}
                                />
                            </div>
                            <div className={styles.lName}>
                                <CustomTextField
                                    name="lastName"
                                    label="Last Name"
                                    variant="filled"
                                    onChange={handleChange}
                                    value={formValues.lastName}
                                    fullWidth={true}
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className={styles.userDetails}>
                            <FormControl
                                variant="filled"
                                size="small"
                                fullWidth={true}
                            >
                                <InputLabel>Branch</InputLabel>
                                <Select
                                    name="branch"
                                    onChange={handleChange}
                                    value={formValues.branch}
                                    sx={{ height: "4em" }}
                                >
                                    {branchNames.map((branchName, id) => (
                                        <MenuItem value={branchName} key={id}>
                                            {branchName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <div>
                                <CustomTextField
                                    label="SID"
                                    name="sid"
                                    variant="filled"
                                    error={!isSidCorrect(formValues.sid)}
                                    onChange={handleChange}
                                    value={formValues.sid}
                                    fullWidth={true}
                                    required={true}
                                />
                                {isSidCorrect(formValues.sid) ? (
                                    <></>
                                ) : (
                                    <ErrorTextBox
                                        text={ERRORTEXT.invalidSid}
                                        icon={<BiErrorCircle />}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Account Details */}
                <div className={styles.sectionWrapper}>
                    <div className={styles.flowSection}>
                        <div className={styles.accountDetails}>
                            <div
                                className={`${styles.smallText} ${styles.smallHeading}`}
                            >
                                EMAIL ID
                            </div>
                            <CustomTextField
                                name="email"
                                label="name@email.com"
                                variant="filled"
                                type="email"
                                onChange={handleChange}
                                value={formValues.email}
                                fullWidth={true}
                                error={!isEmailCorrect(formValues.email)}
                                required={true}
                            />
                            {isEmailCorrect(formValues.email) ? (
                                <></>
                            ) : (
                                <ErrorTextBox
                                    text={ERRORTEXT.emailCorrect}
                                    icon={<BiErrorCircle />}
                                />
                            )}
                            <div className={styles.smallText}>
                                This will be used to login from now on.
                            </div>
                        </div>

                        <div className={styles.accountDetails}>
                            <CustomTextField
                                name="password"
                                label="Password"
                                variant="filled"
                                type={showPassword ? "text" : "password"}
                                onChange={handleChange}
                                error={
                                    isPasswordStrong(formValues.password) !== 2
                                }
                                value={formValues.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <AiFillEye />
                                                ) : (
                                                    <AiFillEyeInvisible />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth={true}
                                required={true}
                            />

                            {isPasswordStrong(formValues.password) == 2 ? (
                                <></>
                            ) : (
                                <ErrorTextBox
                                    text={
                                        ERRORTEXT.weakPassword[
                                            isPasswordStrong(
                                                formValues.password
                                            )
                                        ]
                                    }
                                    icon={<BiErrorCircle />}
                                />
                            )}
                        </div>

                        <div className={styles.accountDetails}>
                            <CustomTextField
                                name="confirmPassword"
                                label="Confirm Password"
                                variant="filled"
                                type="password"
                                error={
                                    !arePasswordsMatching(
                                        formValues.password,
                                        formValues.confirmPassword
                                    )
                                }
                                onChange={handleChange}
                                value={formValues.confirmPassword}
                                fullWidth={true}
                                required={true}
                            />

                            {arePasswordsMatching(
                                formValues.password,
                                formValues.confirmPassword
                            ) ? (
                                <></>
                            ) : (
                                <ErrorTextBox
                                    text={ERRORTEXT.unequalPasswords}
                                    icon={<BiErrorCircle />}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className={`${styles.buttonGroup} ${styles.flowSection}`}>
                    <div className={styles.registerButton}>
                        <button type="submit" disabled={loading}>
                            {!loading ? "Submit" : "Setting up profile..."}
                        </button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
}

export default Register;

const arePasswordsMatching = (
    password: string,
    confirmPassword: string
): boolean => {
    if (confirmPassword.length === 0) {
        return true;
    }

    return password === confirmPassword;
};

const isSidCorrect = (sid: string): boolean => {
    if (!sid) {
        return true;
    } else if (sid.length !== 8) {
        return false;
    }

    for (let i = 0; i < sid.length; i++) {
        if (sid[i] < "0" || sid[i] > "9") {
            return false;
        }
    }

    return true;
};

const maxRepeatedCharacter = (text: string): number => {
    let currentRepeated = 1,
        maxRepeated = 1;
    for (let i = 1; i < text.length; i++) {
        if (text[i] == text[i - 1]) {
            currentRepeated++;
            maxRepeated = Math.max(maxRepeated, currentRepeated);
        } else {
            currentRepeated = 1;
        }
    }

    return maxRepeated;
};

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
};

const branchNames: string[] = [
    "CSE",
    "ECE",
    "EE",
    "MECH",
    "CIVIL",
    "CSEDS",
    "PROD",
];

const isEmailCorrect = (email: string) => {
    if (email.length == 0) return true;
    return email.endsWith("@pec.edu.in");
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req } = context;
    const cookies = parseCookies({ req });
    const token = cookies[Common.AUTHORIZATION];

    if (token) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: true,
            },
        };
    }

    return {
        props: {},
    };
}