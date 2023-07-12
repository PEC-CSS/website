import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

import styles from "../styles/pages/events.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css"; // calendar css
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type NavigateAction = "PREV" | "NEXT" | "TODAY" | "DATE";

function Events() {
    const [listedEvents, setListedEvents] = useState<Event[] | undefined>([
        {
            start: moment().toDate(),
            end: moment().add(17, "hours").toDate(),
            title: "sex sux",
            resource: "huehheuuheu",
        },
    ]);

    const [activeEvent, setActiveEvent] = useState<Event | null>(null);

    return (
        <PageLayout title="Events | ACM at PEC" heading="Events">
            <div className={styles.events}>
                <div className={styles.toolbar}>
                    <div className={styles.left}>
                        <BiChevronLeft className={styles.icon} />
                        <BiChevronRight className={styles.icon} />
                        <p>Month XXXX</p>
                    </div> 
                    <div className={styles.right}>{/* MUI button grp */}</div>
                </div>
                <div className={styles.calendarWrapper}>
                    <Calendar
                        localizer={localizer}
                        events={listedEvents}
                        className={styles.calendar}
                        popup={true}
                        onSelectEvent={setActiveEvent}
                        startAccessor={(event) =>
                            new Date(event.start ?? Date.now())
                        }
                        endAccessor={(event) =>
                            new Date(event.end ?? Date.now())
                        }
                        views={{
                            month: true,
                            week: true,
                            day: true,
                        }}
                        dayLayoutAlgorithm={"no-overlap"}
                        toolbar={false}
                    />
                </div>
            </div>
        </PageLayout>
    );
}

export default Events;
