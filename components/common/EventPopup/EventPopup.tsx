import React, {ChangeEvent, useState} from 'react'
import {Alert, Dialog, Snackbar, TextField} from '@mui/material';
import styles from "../../../styles/components/EventPopup.module.scss";
import { Event } from "react-big-calendar";
import Image from 'next/image';
import {RxCross2} from 'react-icons/rx';
import { Common } from '../../../constants/common';
import {Button} from '@mui/material'
import AcmEventHeads from "./AcmEventHeads";
import {Pill} from "./Pill";
import {endEventApi} from "../../../repository/endEvent/endEventApi";
import {useSession} from "next-auth/react";
import getCookieData from "../../../lib/getCookieData";
import {handleFileUpload} from "../../../util/csvToList";


type Props = {
    title: string;
    id: number;
    ended: boolean;
    subTitle?: string;
    description?: string;
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    venue?: string;
    handleClose: any;
    listedEvents: Event[] | undefined;
    setListedEvents: React.Dispatch<React.SetStateAction<Event[] | undefined>>;
};

function DialogPopup({
    title,
    subTitle,
    description,
    imageUrl,
    startDate,
    endDate,
    handleClose,
    venue,
    id,
    ended,
    listedEvents,
    setListedEvents
}: Props) {
    const [showModal, setShowModal] = useState(false);
    const [pillsOrganizers, setPillsOrganizers] = useState<Pill[]>([])
    const [pillsPublicity, setPillsPublicity] = useState<Pill[]>([])
    const [participantsList, setParticipantsList] = useState<string[]>([])
    const [contributorXp, setContributorXp] = useState(5)
    const [publicityXp, setPublicityXp] = useState(2)
    const [participantXp, setParticipantXp] = useState(1)
    const [showSnackBar, setShowSnackBar] = useState(false)
    const [snackBarError, setSnackBarError] = useState<String>("")
    const [loading, setLoading] = useState(false)
    const [participantsEmptyError, setParticipantsEmptyError] = useState(false)
    const [contributorsEmptyError, setContributorsEmptyError] = useState(false)
    const [publicityEmptyError, setPublicityEmptyError] = useState(false)

    const handleContributorXpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContributorXp(parseInt(e.target.value))
    }
    const handlePublicityXpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPublicityXp(parseInt(e.target.value))
    }
    const handleParticipantXpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParticipantXp(parseInt(e.target.value))
    }

    const {data: session} = useSession();

    const token = getCookieData(session).data.token

    const markListedEventAsEnded = () => {
        const calendarEvent = listedEvents?.find((event) => event.resource.id === id) as Event
        calendarEvent.resource.ended = true;
        const updatedListedEvents = listedEvents?.filter((event) => event.resource.id !== id)
        setListedEvents([...(updatedListedEvents as Array<Event>), calendarEvent])
    }
    const handleEndEvent = async () => {
        if (participantsList.length === 0) {
            setParticipantsEmptyError(true);
            return;
        }
        if (pillsOrganizers.length === 0) {
            setContributorsEmptyError(true);
            return;
        }
        if (pillsPublicity.length === 0) {
            setPublicityEmptyError(true);
            return;
        }

        const publicityList: string[] = pillsPublicity.map( (pillObject) => pillObject.email);
        const organizerList: string[] = pillsOrganizers.map( (pillObject: Pill) => pillObject.email);
        setLoading(true)

        try{
            await endEventApi(
                participantsList,
                publicityList,
                organizerList,
                contributorXp,
                publicityXp,
                participantXp,
                id,
                token
            )
            markListedEventAsEnded()
        }
        catch (error: any){
            console.log(error)
            setSnackBarError(error)
        }
        finally {
            setShowSnackBar(true)
            setLoading(false)
        }
    }

    const handleCSVUpload = (e: ChangeEvent<HTMLInputElement>) => {
        handleFileUpload(e).then((participantEmails) => {
            setParticipantsList(participantEmails)
            if (participantEmails.length !== 0) {
                setParticipantsEmptyError(false)
            }
        })
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
                            {/* <h3>{subTitle}</h3> */}
                            <div>
                                {finalDateString(
                                    getDateString(
                                        startDate.getDate(),
                                        startDate.getMonth(),
                                        startDate.getFullYear()
                                    ),
                                    getDateString(
                                        endDate.getDate(),
                                        endDate.getMonth(),
                                        endDate.getFullYear()
                                    ),
                                    startDate.toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        timeZone: "Asia/Kolkata",
                                    })
                                )}
                            </div>
                        </div>
                        <p>{venue}</p>
                        <p>{description}</p>
                    </div>
                        <div style={{
                            width:"100%",
                            textAlign:"right"
                        }}>
                            {!ended && <Button onClick={() => setShowModal(true)} variant="outlined">end event</Button>}
                        </div>
                    </div>
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
                            <AcmEventHeads teamTitle={"Organizing Heads"} pills={pillsOrganizers} setPills={setPillsOrganizers} setEmptyError={setContributorsEmptyError} />
                            <AcmEventHeads teamTitle={"Publicity Heads"} pills={pillsPublicity} setPills={setPillsPublicity} setEmptyError={setPublicityEmptyError} />
                            <form>
                                <input
                                    type={"file"}
                                    name={"file"}
                                    accept={".csv"}
                                    onChange={handleCSVUpload}
                                />
                                <input
                                    type={"reset"}
                                    onClick={() => setParticipantsList([])}
                                />
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
                            {
                                participantsEmptyError && <p style={{color:"red"}}>- Please upload a csv containing participants emails. Make sure there is at least 1 participant and the column name for email addresses contains &quot;mail&quot; as a substring</p>
                            }
                            {
                                publicityEmptyError && <p style={{color:"red"}}>- Please add at least 1 Publicity Head</p>
                            }
                            {
                                contributorsEmptyError && <p style={{color:"red"}}>- Please add at least 1 Contributor Head</p>
                            }
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
                        severity={snackBarError.length ? "error" : "success"}
                        sx={{ width: "100%" }}
                    >
                        {snackBarError.length ? snackBarError : "Event ended successfully"}
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

    dateString += `${dummyDate.toLocaleString("en-US", {
        month: "short",
    })}, ${year}`;
    return dateString;
};

const finalDateString = (date1: string, date2: string, time: string) => {
    if (date1 === date2) {
        return `${date1}, ${time}`;
    } else {
        return `${date1} - ${date2}`;
    }
};
