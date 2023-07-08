import React from 'react'
import { IconType } from 'react-icons/lib'
import styles from "../../styles/pages/register.module.scss";

type Props = {
    text: string,
    icon?: JSX.Element
}

function ErrorTextBox({ text, icon }: Props) {
    return (
        <div className={styles.errorBoxWrapper}>
            {
                icon && 
                <span className={`${styles.errorText}`}>
                    {icon}
                </span>
            }
            <span className={`${styles.smallText} ${styles.errorText} ${styles.spaceBefore}`}>
                {text}
            </span>
        </div>
    )
}

export default ErrorTextBox;