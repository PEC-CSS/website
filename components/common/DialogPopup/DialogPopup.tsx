import React from 'react'
import { Dialog } from '@mui/material';
import styles from "../../../styles/components/Dialog.module.scss";
import { Josefin_Sans } from 'next/font/google';

type Props = {
    icon?: JSX.Element;
    errorTitle: string;
    errorDescription: string;
    handleClose: any;
    handleAction?: any;
}

const font = Josefin_Sans({
    preload: false
});

function DialogPopup({ icon, errorTitle, errorDescription, handleClose, handleAction }: Props) {

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            sx={{ padding: "0", margin: "0", backdropFilter: "blur(1px)" }}
        >
            <div className={`${styles.dialogParent}`}>
                <div className={`${styles.popupContent}`}>
                    <div className={`${styles.text} ${styles.itemCentered} ${styles.largeText} ${font.className}`}>
                        {icon}
                        {errorTitle}
                    </div>
                    <div className={`${styles.text} ${font.className}`}> {errorDescription} </div>
                </div>
                
                <button onClick={handleAction ?? handleClose}> OK </button>
            </div>
        </Dialog>
    )
}

export default DialogPopup;