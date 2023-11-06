// pages/forgot-password/change-password.tsx
import PageLayout from "../../components/layout/PageLayout";
import CustomTextField from "../../components/common/CustomTextField/CustomTextField";
import styles from "../../styles/pages/register.module.scss";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { IconButton, InputAdornment } from "@mui/material";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { changePassword } from "../../repository/auth";
import ErrorTextBox from "../../components/register/ErrorTextBox";
import { ERRORTEXT } from "../../constants/errorText";
import { BiErrorCircle } from "react-icons/bi";
import DialogPopup from "../../components/common/DialogPopup/DialogPopup";

export default function ChangePassword() {
    const router = useRouter();
    const { token } = router.query; // Extract the token from the query string

    const [error, setError] = useState({
        error: false,
        title: "",
        description: "",
    });

    const [formValues, setFormValues] = useState({
        password: "",
        confirmPassword: "",
    });

    const [successMessage, setSuccessMessage] = useState(false);

    const [loading, setLoading] = useState(false);

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

    const arePasswordsMatching = (
        password: string,
        confirmPassword: string
    ): boolean => {
        if (confirmPassword.length === 0) {
            return true;
        }

        return password === confirmPassword;
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (
            !arePasswordsMatching(
                formValues.password,
                formValues.confirmPassword
            ) ||
            isPasswordStrong(formValues.password) < 2
        ) {
            setError({
                ...error,
                error: true,
            });
        } else {
            const response = await changePassword(formValues.password, token);
            if (!response.success) {
                setError({
                    title: "Error",
                    description: response.error?.message || "",
                    error: true,
                });
                setLoading(false);
                return;
            }
        }
        setLoading(false);
        setSuccessMessage(true);

        setTimeout(() => {
            setSuccessMessage(false);
        }, 5000);
    };

    return (
        <PageLayout
            title="Change Password | ACM at PEC"
            description="Change your password on the PECACM platform."
            heading={"Change Your Password"}
        >
            <form className={styles.parent} onSubmit={handleSubmit}>
                {error.error ? (
                    <DialogPopup
                        errorTitle={error.title}
                        errorDescription={error.description}
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

                <div className={styles.sectionWrapper}>
                    <div className={styles.flowSection}>
                        <div className={styles.smallText}>
                            Enter New Password
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

                <div className={`${styles.buttonGroup} ${styles.flowSection}`}>
                    <div className={styles.registerButton}>
                        <button type="submit" disabled={loading}>
                            {!loading
                                ? successMessage
                                    ? "Password Changed"
                                    : "Change Password"
                                : "Changing..."}
                        </button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
}
