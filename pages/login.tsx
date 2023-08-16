import React, { ChangeEvent, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/register.module.scss";
import { ERRORTEXT } from "../constants/errorText";
import { SelectChangeEvent } from "@mui/material/Select";
import { IconButton, InputAdornment } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import CustomTextField from "../components/common/CustomTextField/CustomTextField";
import DialogPopup from "../components/common/DialogPopup/DialogPopup";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "../repository/auth";
import { useLocalStorage } from "usehooks-ts";
import { Common } from "../constants/common";
import { useRouter } from "next/router";

function Login() {
    const [_, setAuthorization] = useLocalStorage<string | null>(
        Common.AUTHORIZATION,
        null
    );

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState({
        error: false,
        title: "",
        description: "",
    });

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

        if (error.error) {
            setError({
                ...error,
                error: true,
            });
        } else {
            const response = await login({ ...formValues });
            if (response.error || !response.jwtToken) {
                setError({
                    title: "Error while signing in",
                    description: response.error?.message || "",
                    error: true,
                });
                setLoading(false);
                return;
            }
            const jwtToken = response.jwtToken;
            setAuthorization(jwtToken);
        }
        setLoading(false);
        router.push("/dashboard");
    };

    return (
        <PageLayout
            title="Login | ACM at PEC"
            description="Login into the PECACM platform."
            heading={"Welcome back!"}
        >
            <form className={styles.parent} onSubmit={handleSubmit}>
                {error.error ? (
                    <DialogPopup
                        errorTitle={
                            error.title ?? ERRORTEXT.invalidFormData.title
                        }
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

                <div className={styles.intro}>
                    <h1>Login to PEC ACM</h1>
                    <div style={{ marginTop: "7px" }}>
                        Don{`'`}t have an account? &nbsp;
                        <Link
                            href="/register"
                            className={styles.link}
                            aria-label="Register"
                        >
                            Register
                        </Link>
                    </div>
                </div>

                <div className={styles.sectionWrapper}>
                    <div className={styles.flowSection}>
                        <div
                            className={`${styles.smallText} ${styles.smallHeading}`}
                        >
                            EMAIL ID
                        </div>
                        <div className={styles.accountDetails}>
                            <CustomTextField
                                name="email"
                                type="email"
                                label="email@name.com"
                                variant="filled"
                                onChange={handleChange}
                                value={formValues.email}
                                fullWidth={true}
                                required={true}
                            />
                        </div>
                        <div className={styles.accountDetails}>
                            <CustomTextField
                                name="password"
                                label="Password"
                                variant="filled"
                                type={showPassword ? "text" : "password"}
                                onChange={handleChange}
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
                        </div>
                    </div>
                </div>

                <div className={`${styles.buttonGroup} ${styles.flowSection}`}>
                    <div className={styles.registerButton}>
                        <button type="submit" disabled={loading}>
                            {!loading ? "Login" : "Loading..."}
                        </button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
}

export default Login;
