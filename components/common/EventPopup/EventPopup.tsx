import React from 'react'
import { Dialog } from '@mui/material';
import styles from "../../../styles/components/EventPopup.module.scss";
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import {RxCross2} from 'react-icons/rx';
import { Common } from '../../../constants/common';

type Props = {
    title: string;
    subTitle: string;
    description: string[];
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    handleClose: any;
}

const font = Josefin_Sans({
    preload: false
});

function DialogPopup({ title, subTitle, description, imageUrl, startDate, endDate, handleClose }: Props) {
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={true}
            onClose={handleClose}
            sx={{ padding: "0", margin: "0", backdropFilter: "blur(5px)" }}
            PaperProps={{ sx: { borderRadius: "10px" } }}
        >
            <div className={styles.modal}>

                <div className={styles.modalHeading}>
                    <h2>{title}</h2>
                    <div className={styles.closeIcon} onClick={handleClose}>
                        <RxCross2 size={25} color={Common.primaryColor} />
                    </div>
                </div>

                <div className={styles.content}>
                    <Image 
                        src={imageUrl} 
                        alt={`${title} event poster`}
                        width={200} 
                        height={200}
                    />
                    <div className={styles.text}>
                        <p className={styles.subtitle}>
                            <h3>{subTitle}</h3>
                            <div>
                                {
                                    finalDateString(
                                        getDateString(startDate.getDate(), startDate.getMonth(),    startDate.getFullYear()),
                                        getDateString(endDate.getDate(), endDate.getMonth(), endDate.getFullYear()),
                                        startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })
                                    )
                                }
                            </div>
                        </p>
                        {
                            description.map((desc, i) => {
                                return <p key={i}>{desc}</p>
                            })
                        }
                    </div>
                </div>

            </div>
        </Dialog>
    )
}

export default DialogPopup;

const getDateString = (date: number, month: number, year: number) => {
    var dateString = `${date} `;
    const dummyDate = new Date();
    dummyDate.setMonth(month);

    dateString += `${dummyDate.toLocaleString('en-US', { month: 'short', })}, ${year}`;
    return dateString;
}

const finalDateString = (date1: string, date2: string, time: string) => {
    if (date1 === date2) {
        return `${date1}, ${time}`;
    } else {
        return `${date1} - ${date2}`;
    }
}