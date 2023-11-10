import React, { ChangeEvent } from "react";
import {
    Alert,
    Dialog,
    MenuItem,
    Select,
    SelectChangeEvent,
    Snackbar,
} from "@mui/material";
import styles from "../../../styles/components/CreatePopup.module.scss";
import { Josefin_Sans } from "next/font/google";
import { RxCross2 } from "react-icons/rx";
import { Common } from "../../../constants/common";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { fetchWrapper } from "../../../util/httpWrapper";
import getCookieData from "../../../lib/getCookieData";
import { useSession } from "next-auth/react";
import { MdErrorOutline } from "react-icons/md";
import moment from "moment";
import { Event } from "react-big-calendar";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    appendEvent: (event: Event) => void;
};

const font = Josefin_Sans({
    preload: false,
});

function DialogPopup({ open, setOpen, appendEvent }: Props) {
    const defaultFormValues = {
        title: "",
        branch: "DEVELOPMENT",
        description: "",
        startDate: dayjs(),
        endDate: dayjs(),
        relatedLink: "",
        venue: "",
    };
    const [formValues, setFormValues] = React.useState(defaultFormValues);

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [dateError, setDateError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const { data: session } = useSession();

    React.useEffect(() => {
        if (formValues.startDate > formValues.endDate) {
            setDateError(true);
        } else {
            setDateError(false);
        }
    }, [formValues]);

    const handleStartDateTimeChange = (newDate: Dayjs | null) => {
        setFormValues({
            ...formValues,
            startDate: newDate ?? dayjs(),
        });
    };

    const handleEndDateTimeChange = (newDate: Dayjs | null) => {
        setFormValues({
            ...formValues,
            endDate: newDate ?? dayjs(),
        });
    };

    const handleChange = (
        event:
            | ChangeEvent<HTMLInputElement>
            | SelectChangeEvent
            | ChangeEvent<HTMLTextAreaElement>
    ) => {
        event.preventDefault();
        setError(false);
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
        setError(false);

        const eventDetails = {
            ...formValues,
            startDate: formValues.startDate
                .add(5, "hours")
                .add(30, "minutes")
                .toISOString(),
            endDate: formValues.endDate
                .add(5, "hours")
                .add(30, "minutes")
                .toISOString(),
            //.format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
        };

        await fetchWrapper
            .post({
                url: "v1/events",
                body: eventDetails,
                token: getCookieData(session).data.token,
            })
            .then((json) => {
                setLoading(false);
                setSuccess(true);
                appendEvent({
                    start: moment(eventDetails.startDate).toDate(),
                    end: moment(eventDetails.endDate).toDate(),
                    title: eventDetails.title,
                    resource: {
                        id: json.id,
                        branch: eventDetails.branch,
                        venue: eventDetails.venue,
                        description: eventDetails.description,
                        relatedLink: eventDetails.relatedLink,
                    },
                });
            })
            .catch((e) => {
                setError(true);
                setLoading(false);
                console.log(e);
            });

        setLoading(false);
    };

    const handleSnackbarClose = () => {
        setOpen(false);
        setSuccess(false);
        setFormValues(defaultFormValues);
    };

    return (
        <Dialog
            fullWidth={true}
            maxWidth={"sm"}
            open={open}
            onClose={() => setOpen(false)}
            sx={{ padding: "0", margin: "0", backdropFilter: "blur(5px)" }}
            PaperProps={{ sx: { borderRadius: "10px" } }}
        >
            <div className={styles.modal}>
                <div className={styles.modalHeading}>
                    <h2>Create Event</h2>
                    <div
                        className={styles.closeIcon}
                        onClick={() => setOpen(false)}
                    >
                        <RxCross2 size={25} color={Common.primaryColor} />
                    </div>
                </div>

                <form className={styles.forms} onSubmit={handleSubmit}>
                    <div className={styles.items}>
                        <h3>Title</h3>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter Event Title"
                            className={styles.inputBox}
                            onChange={handleChange}
                            value={formValues.title}
                            required
                        />
                    </div>
                    <div className={styles.items}>
                        <h3>Branch</h3>
                        <Select
                            name="branch"
                            onChange={handleChange}
                            value={formValues.branch}
                            sx={{ width: "70%", fontFamily: font.style }}
                        >
                            {Common.BRANCHES.map((branch, id) => (
                                <MenuItem value={branch} key={id}>
                                    {branch}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div className={styles.items}>
                        <h3>Start Date</h3>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                sx={{ width: "70%", fontFamily: font.style }}
                                minDate={dayjs("2020-12-01T17:30")}
                                maxDate={dayjs("2030-12-01T17:30")}
                                value={formValues.startDate}
                                onChange={handleStartDateTimeChange}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={styles.items}>
                        <h3>End Date</h3>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                sx={{ width: "70%", fontFamily: font.style }}
                                minDate={dayjs("2020-12-01T19:30")}
                                maxDate={dayjs("2030-12-01T19:30")}
                                value={formValues.endDate}
                                onChange={handleEndDateTimeChange}
                                className={font.className}
                            />
                        </LocalizationProvider>
                    </div>
                    {dateError && (
                        <p className={font.className} style={{ color: "red" }}>
                            <span>
                                <MdErrorOutline fontSize="small" />
                            </span>{" "}
                            Make sure that event end date time is after event
                            start time!
                        </p>
                    )}
                    <div className={styles.items}>
                        <h3>Description</h3>
                        <textarea
                            placeholder="Enter Event Description"
                            className={styles.textArea}
                            value={formValues.description}
                            onChange={handleChange}
                            name="description"
                            required
                            rows={6}
                        />
                    </div>
                    <div className={styles.items}>
                        <h3>Venue</h3>
                        <input
                            type="text"
                            placeholder="Enter Event Venue"
                            value={formValues.venue}
                            onChange={handleChange}
                            name="venue"
                            required
                            className={styles.inputBox}
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.button}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Submit"}
                    </button>

                    {error && (
                        <p
                            className={font.className}
                            style={{ color: "red", padding: "10px 0" }}
                        >
                            <span>
                                <MdErrorOutline fontSize="small" />
                            </span>{" "}
                            Something went wrong! Check logs
                        </p>
                    )}
                </form>
            </div>
            <Snackbar
                open={success ? true : false}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {"Event Created!"}
                </Alert>
            </Snackbar>
        </Dialog>
    );
}

export default DialogPopup;
