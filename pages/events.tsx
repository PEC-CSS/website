import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

import styles from "../styles/pages/events.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css"; // calendar css

function Events() {
    const [listedEvents, setListedEvents] = useState<Event[] | undefined>([
        {
            start: moment().add(2, "h").toDate(),
            end: moment().add(2, "hours").toDate(),
            title: "dummy event",
            resource: "huehheuuheu",
        },
    ]);

    const [activeEvent, setActiveEvent] = useState<Event | null>(null);

    return (
        <PageLayout title="Events | ACM at PEC" heading="Events">
            <div className={styles.events}>
                <p>Have a look at our calendar</p>
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
                            week: false,
                            day: false,
                            agenda: true,
                        }}
                        
                        dayLayoutAlgorithm={"no-overlap"}
                    />
                </div>
            </div>
        </PageLayout>
    );
}

export default Events;
