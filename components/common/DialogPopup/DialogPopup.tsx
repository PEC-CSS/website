import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import styles from "../../../styles/components/Dialog.module.scss";

type Props = {
    icon?: JSX.Element;
    errorTitle: string;
    errorDescription: string;
    handleClose: any;
}

function DialogPopup({ icon, errorTitle, errorDescription, handleClose }: Props) {

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            sx={{padding: "0", margin: "0", backdropFilter: "blur(1px)"}}
        >
            <div className={styles.dialogParent}>
                <div className={`${styles.popupContent}`}>
                    <div className={`${styles.text} ${styles.itemCentered} ${styles.largeText}`}>
                        {icon}
                        {errorTitle}
                    </div>
                    <div className={styles.text}> {errorDescription} </div>
                </div>

                <button onClick={handleClose}> OK </button>
            </div>
        </Dialog>
    )
}

export default DialogPopup;