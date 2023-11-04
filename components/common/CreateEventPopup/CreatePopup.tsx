import React from "react";
import { Dialog } from "@mui/material";
import styles from "../../../styles/components/CreatePopup.module.scss";
import { Josefin_Sans } from "next/font/google";
import { RxCross2 } from "react-icons/rx";
import { Common } from "../../../constants/common";

type Props = {
  handleClose: any;
};

const font = Josefin_Sans({
  preload: false,
});

function DialogPopup({ handleClose }: Props) {

  const handleSubmit = () => {

  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      open={true}
      onClose={handleClose}
      sx={{ padding: "0", margin: "0", backdropFilter: "blur(5px)" }}
      PaperProps={{ sx: { borderRadius: "10px" } }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeading}>
          <h2>Create Event</h2>
          <div className={styles.closeIcon} onClick={handleClose}>
            <RxCross2 size={25} color={Common.primaryColor} />
          </div>
        </div>

        <div className={styles.forms}>
          <div className={styles.items}>
            <h3>Title</h3>
            <input
              type="text"
              placeholder="Enter Event Title: "
              className={styles.inputBox}
            />
          </div>
          <div className={styles.items}>
            <h3>Branch</h3>
            <input
              type="text"
              placeholder="Enter Event Branch: "
              className={styles.inputBox}
            />
          </div>
          <div className={styles.items}>
            <h3>Start Date</h3>
            <input
              type="text"
              placeholder="Enter Start Date: "
              className={styles.inputBox}
            />
          </div>
          <div className={styles.items}>
            <h3>End Date</h3>
            <input
              type="text"
              placeholder="Enter End Date: "
              className={styles.inputBox}
            />
          </div>
          <div className={styles.items}>
            <h3>Description</h3>
            <textarea
              placeholder="Enter Event Description: "
              className={styles.textArea}
              rows={6}
            />
          </div>
          <div className={styles.items}>
            <h3>Venue</h3>
            <input
              type="text"
              placeholder="Enter Event Venue: "
              className={styles.inputBox}
            />
          </div>

          <button className={styles.button}>Submit</button>
        </div>
      </div>
    </Dialog>
  );
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

const finalDateString = (date1: string, date2: string) => {
  if (date1 === date2) {
    return date1;
  } else {
    return `${date1} - ${date2}`;
  }
};
