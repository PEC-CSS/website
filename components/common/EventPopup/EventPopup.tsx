import React, {useRef, useState} from 'react'
import { Dialog } from '@mui/material';
import styles from "../../../styles/components/EventPopup.module.scss";
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import {RxCross2} from 'react-icons/rx';
import { Common } from '../../../constants/common';
import {Button} from '@mui/material'
import {Pill} from './Pill'
import PillContainer from "./PillContainer";
import AcmEventPeeps from "./AcmEventPeeps";
import {getMatchingUsernamesApi} from "./getMatchingUsernamesApi";

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
    const [showModal, setShowModal] = useState(false);
    // const nameSearchInput = useRef(null);
    
    return (
        !showModal ?

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
                                        getDateString(startDate.getDate(), startDate.getMonth(), startDate.getFullYear()),
                                        getDateString(endDate.getDate(), endDate.getMonth(), endDate.getFullYear()),
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

                <div style={{
                    width:"100%",
                    textAlign:"right"
                }}>
                    <Button onClick={() => setShowModal(true)} variant="outlined">end event</Button>
                </div>

                {showModal &&
                    <p>sell another soul</p>
                }
            </div>
        </Dialog> :

        <Dialog
            fullWidth={true}
            maxWidth={'lg'}
            open={true}
            // onClose={handleClose}
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
                    <div className={styles.text} >
                        <AcmEventPeeps teamTitle={"Organizing Peeps"} />
                        <AcmEventPeeps teamTitle={"Publicity Peeps"} />
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

const finalDateString = (date1: string, date2: string) => {
    if (date1 === date2) {
        return date1;
    } else {
        return `${date1} - ${date2}`;
    }
}