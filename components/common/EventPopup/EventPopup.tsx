import React, {useState} from 'react'
import {Alert, Dialog, Input, Snackbar, TextField} from '@mui/material';
import styles from "../../../styles/components/EventPopup.module.scss";
import { Josefin_Sans } from 'next/font/google';
import Image from 'next/image';
import {RxCross2} from 'react-icons/rx';
import { Common } from '../../../constants/common';
import {Button} from '@mui/material'
import AcmEventPeeps from "./AcmEventPeeps";
import {Pill} from "./Pill";
import {endEventApi} from "../../../repository/endEvent/endEventApi";
import {useSession} from "next-auth/react";
import getCookieData from "../../../lib/getCookieData";
import {handleFileUpload} from "../../../util/csvToList";


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
    const [pillsOrganizers, setPillsOrganizers] = useState<Pill[]>([])
    const [pillsPublicity, setPillsPublicity] = useState<Pill[]>([])
    const [participantsList, setParticipantsList] = useState<string[]>([])
    const [contributorXp, setContributorXp] = useState(5)
    const [publicityXp, setPublicityXp] = useState(2)
    const [participantXp, setParticipantXp] = useState(1)
    const [showSnackBar, setShowSnackBar] = useState(false)
    const [error, setError] = useState<String>("")
    const [loading, setLoading] = useState(false)

    const handleContributorXpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContributorXp(parseInt(e.target.value))
    }
    const handlePublicityXpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContributorXp(parseInt(e.target.value))
    }
    const handleParticipantXpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContributorXp(parseInt(e.target.value))
    }

    const {data: session} = useSession();

    const token = getCookieData(session).data.token
    const handleEndEvent = async () => {
        const publicityList: string[] = pillsPublicity.map( (pillObject) => pillObject.email);
        const organizerList: string[] = pillsOrganizers.map( (pillObject: Pill) => pillObject.email);
        setLoading(true)

        try{
            await endEventApi(
                participantsList,
                publicityList,
                organizerList,
                2,
                3,
                4,
                8,
                token
            )
        }
        catch (error: any){
            console.log(error)
            setError(error)
        }
        finally {
            setShowSnackBar(true)
            setLoading(false)
        }
    }

    const handleCSVUpload = (e: any) => {
        const participantEmails = handleFileUpload(e)
        setParticipantsList(participantEmails)
    }

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
                            <div className={styles.subtitle}>
                                <h3>{subTitle}</h3>
                                <div>
                                    {
                                        finalDateString(
                                            getDateString(startDate.getDate(), startDate.getMonth(), startDate.getFullYear()),
                                            getDateString(endDate.getDate(), endDate.getMonth(), endDate.getFullYear()),
                                            startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })
                                        )
                                    }
                                </div>
                            </div>
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
                sx={{ padding: "0", margin: "0", backdropFilter: "blur(10px)" }}
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
                            <AcmEventPeeps teamTitle={"Organizing Peeps"} pills={pillsOrganizers} setPills={setPillsOrganizers} />
                            <AcmEventPeeps teamTitle={"Publicity Peeps"} pills={pillsPublicity} setPills={setPillsPublicity} />
                            <form>
                                <input
                                    type={"file"}
                                    name={"file"}
                                    accept={".csv"}
                                    onChange={handleCSVUpload}
                                />
                                <input type={"reset"} />
                            </form>
                            <TextField style={{margin:"10px"}} label={"Contributor Xp"} variant={"outlined"} value={contributorXp} onChange={handleContributorXpChange} type={'number'} ></TextField>
                            <TextField style={{margin:"10px"}} label={"Publicity Xp"} variant={"outlined"} value={publicityXp} onChange={handlePublicityXpChange} type={'number'} ></TextField>
                            <TextField style={{margin:"10px"}} label={"Participant Xp"} variant={"outlined"} value={participantXp} onChange={handleParticipantXpChange} type={'number'} ></TextField>
                            <Button
                                onClick={handleEndEvent}
                                variant="outlined"
                                color="warning"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "End Event"}
                            </Button>
                        </div>
                    </div>
                </div>
                <Snackbar
                    open={showSnackBar}
                    autoHideDuration={2000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity={error.length ? "error" : "success"}
                        sx={{ width: "100%" }}
                    >
                        {error.length ? error : "Event ended successfully"}
                    </Alert>
                </Snackbar>
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