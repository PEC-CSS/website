import React, { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

import styles from "../../styles/pages/dashEvents.module.scss";
import "react-big-calendar/lib/css/react-big-calendar.css"; // calendar css
import EventPopup from "../../components/common/EventPopup/EventPopup";
import CreatePopup from "../../components/common/CreateEventPopup/CreatePopup";
import getServerCookieData from "../../lib/getServerCookieData";
import { getEvents } from "../../repository/events";
import { Event as EventObject } from "../../types/event";
import { EventResource } from "../../types/eventResource";

// see eventPropGetter
const getEventClassByEvent = (event: Event) => {
    let modifierStr = "";
    if (event.resource.branch) {
        const commitee = event.resource.branch;
        modifierStr = `rbc-override-${commitee.toLowerCase()}`;
    }
    return {
        className: `rbc-override-event ${modifierStr}`,
    };
};

function Events({ designation }: { designation: string }) {
    const [listedEvents, setListedEvents] = useState<Event[] | undefined>([]);
    const [activeEvent, setActiveEvent] = useState<Event | null>(null);
    const [eventResource, setEventResource] = useState<EventResource | null>(
        null
    );
    const [showModal, setShowModal] = useState<Boolean>(false);
    const [createModal, setCreateModal] = useState(false);

    const [currDate, setCurrDate] = useState(new Date(Date.now()));

    const handleSelectEvent = (event: Event) => {
        setEventResource(event.resource);
        setActiveEvent(event);
        setShowModal(true);
    };

    const handleCreateEvent = () => {
        setCreateModal(true);
    };

    const appendEvent = (event: Event) => {
        const newEvents = listedEvents;
        newEvents?.push(event);
        setListedEvents(newEvents);
    };

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await getEvents({
                startDate: moment(currDate)
                    .subtract(1, "month")
                    .startOf("month")
                    .format("YYYY-MM-DD"),
                endDate: moment(currDate)
                    .add(1, "month")
                    .endOf("month")
                    .format("YYYY-MM-DD"),
            });

            if (res.error) {
                return;
            }

            const calendarEvents = res.events?.map((event: EventObject) => {
                return {
                    start: moment(event.startDate).toDate(),
                    end: moment(event.endDate).toDate(),
                    title: event.title,
                    resource: {
                        id: event.id,
                        branch: event.branch,
                        venue: event.venue,
                        description: event.description,
                        relatedLink: event.relatedLink,
                        ended: event.ended
                    } as EventResource,
                };
            });

            setListedEvents(calendarEvents);
        };

        fetchEvents();
    }, [currDate]);

    return (
        <DashboardLayout title="Events | ACM at PEC" heading="Events">
            <div className={styles.events}>
                <p>Have a look at our calendar</p>

                <div className={styles.calendarWrapper}>
                    {designation === "Admin" ||
                    designation === "Core" ||
                    designation === "ExecutiveBody" ? (
                        <div className={styles.eventButton}>
                            <button type="submit" onClick={handleCreateEvent}>
                                Create Event
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}

                    {createModal ? (
                        <CreatePopup
                            open={createModal}
                            setOpen={setCreateModal}
                            appendEvent={appendEvent}
                        />
                    ) : (
                        <></>
                    )}

                    {showModal ? (
                        <EventPopup
                            id={eventResource?.id ?? 0}
                            ended={eventResource?.ended ?? false}
                            handleClose={() => {
                                setShowModal(false);
                            }}
                            title={activeEvent?.title as string}
                            description={eventResource?.description as string}
                            imageUrl={`/assets/logos/${
                                eventResource?.branch.toLowerCase() ?? "acm"
                            }.png`}
                            venue={eventResource?.venue ?? ""}
                            startDate={
                                activeEvent?.start
                                    ? activeEvent.start
                                    : new Date()
                            }
                            endDate={
                                activeEvent?.end ? activeEvent.end : new Date()
                            }
                            listedEvents={listedEvents}
                            setListedEvents={setListedEvents}
                        />
                    ) : (
                        <></>
                    )}

                    <Calendar
                        date={currDate}
                        onNavigate={(date) => {
                            setCurrDate(date);
                        }}
                        localizer={localizer}
                        events={listedEvents}
                        className={styles.calendar}
                        popup={true}
                        onSelectEvent={handleSelectEvent}
                        startAccessor="start"
                        endAccessor="end"
                        eventPropGetter={getEventClassByEvent}
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
        </DashboardLayout>
    );
}

export default Events;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { data } = getServerCookieData(context);

    const token = data?.token;
    const designation = data?.user?.designation;

    if (!token) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: { designation },
    };
}
