import React, { ChangeEvent, useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import styles from "../../styles/pages/register.module.scss";
import CustomTextField from "../../components/common/CustomTextField/CustomTextField";
import DialogPopup from "../../components/common/DialogPopup/DialogPopup";
import { sendResetEmail } from "../../repository/auth"; // Replace with the appropriate function for resetting the password

function forgotPassword() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formValues, setFormValues] = useState({
        email: "",
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [successMessage, setSuccessMessage] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [error, setError] = useState({
        error: false,
        title: "",
        description: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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


        const response = await sendResetEmail(formValues.email);
        if (response.error) {
            setError({
                title: "Error while sending email",
                description: response.error?.message || "",
                error: true,
            });
            setLoading(false);
            return;
        }

        // Password reset successful, you can provide feedback to the user

        setLoading(false);

        setSuccessMessage(true);

        setTimeout(() => {
            setSuccessMessage(false);
        }, 5000);


    };

    return (
        <PageLayout title="Forgot Your Password" description="Reset your password here.">
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

                <div className={styles.intro}>
                    <h1>Forgot Your Password?</h1>
                    <div style={{ marginTop: "7px" }}>
                        Please enter your registered email address to receive password reset email.
                    </div>
                </div>

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
                                required={true}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.buttonGroup} ${styles.flowSection}`}>
                    <div className={styles.registerButton}>
                        <button type="submit" disabled={loading}>
                            {!loading ? (successMessage ? "Email Sent" : "Send Reset Email") : "Sending..."}
                        </button>
                    </div>
                </div>
            </form>
        </PageLayout>
    );
}

export default forgotPassword;
