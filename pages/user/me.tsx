import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/me.module.scss";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getUser } from "../../repository/user";
import { User } from "../../types/user";
import { ErrorResponse } from "../../types/response/errorResponse";
import { Avatar } from "@mui/material";
import getServerCookieData from "../../lib/getServerCookieData";
import { setLoadingCards } from "../../redux/slices/trendingSlice";
import { getUserEvents } from "../../repository/events";
import getCookieData from "../../lib/getCookieData";
import { useSession } from "next-auth/react";
import { Transaction } from "../../types/transaction";
import moment from "moment";

function MyProfile({
    user,
    error,
}: {
    user: User | null;
    error: ErrorResponse | null;
}) {
    const { data: session } = useSession();

    const [selectedTab, setSelectedTab] = useState<
        "Organizer" | "Participant" | "Publicity"
    >("Organizer");

    const [userEvents, setUserEvents] = useState<Transaction[]>([]);

    const [eventsLoading, setEventsLoading] = useState(false);
    const [eventsError, setEventsError] = useState(false);

    const [page, setPage] = useState(0);

    const fetchEvents = async (query: { pageNumber: number }) => {
        setLoadingCards(true);
        const events = await getUserEvents({
            role: selectedTab.toUpperCase(),
            pageSize: 25,
            pageNumber: query.pageNumber,
            token: getCookieData(session).data.token,
        });
        if (events.error || !events.events) {
            setEventsError(true);
            return;
        }
        setUserEvents(events.events);
        setLoadingCards(false);
    };

    useEffect(() => {
        fetchEvents({ pageNumber: page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTab, page]);

    useEffect(() => {
    }, [userEvents]);

    if (error) {
        return (
            <DashboardLayout title="Dashboard | ACM at PEC">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <p>Something wrong happened</p>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout title="Dashboard | ACM at PEC">
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div className={styles.userInfo}>
                    <Avatar
                        sx={{
                            height: 100,
                            width: 100,
                            fontSize: 36,
                            fontFamily: "Josefin Sans",
                            bgcolor: Common.primaryColor,
                            color: "white",
                            mb: 2,
                        }}
                        src={user?.dp}
                    >
                        {user?.name?.[0]}
                    </Avatar>
                    <div className={styles.info}>
                        <h2 className={styles.header}>
                            {user?.name},{" "}
                            <span className={styles.designation}>
                                {user?.designation}
                            </span>
                        </h2>
                        <h2 className={styles.header}>{user?.branch}</h2>
                        <h2 className={styles.header}>{user?.sid}</h2>
                    </div>
                </div>
                <div className={styles.experience}>
                    <Image
                        src="/assets/images/trophy.png"
                        alt={""}
                        height={75}
                        width={75}
                    />
                    <div className={styles.info}>
                        <h1 className={styles.header}>{user?.xp}</h1>
                    </div>
                </div>
            </div>

            <div className={styles.menu}>
                <button
                    className={`${styles.MenuButton} ${
                        selectedTab == "Organizer" ? styles.active : ""
                    }`}
                    onClick={() => setSelectedTab("Organizer")}
                >
                    Organised Events
                </button>
                <button
                    className={`${styles.MenuButton} ${
                        selectedTab == "Publicity" ? styles.active : ""
                    }`}
                    onClick={() => setSelectedTab("Publicity")}
                >
                    Publicized Events
                </button>
                <button
                    className={`${styles.MenuButton} ${
                        selectedTab == "Participant" ? styles.active : ""
                    }`}
                    onClick={() => setSelectedTab("Participant")}
                >
                    Participated Events
                </button>
            </div>

            <div className={styles.eventDetails}>
                {userEvents.length === 0 || eventsLoading || eventsError ? (
                    <div className={styles.cardcontainer}>
                        <div className={styles.card}>
                            {!eventsLoading ? (
                                eventsError ? (
                                    <p>Something went wrong</p>
                                ) : (
                                    <p>No Events Found</p>
                                )
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className={styles.events}>
                        {userEvents.map((e) => {
                            return (
                                <div key={e.id} className={styles.eventTile}>
                                    <h3 className={styles.eventName}>
                                        {e.name}
                                    </h3>
                                    <p className={styles.date}>
                                        {moment(e?.timestamp).format(
                                            "DD-MM-YY"
                                        )}
                                    </p>
                                    <p className={styles.xp_gained}>
                                        {e.xp_gained}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}

export default MyProfile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { data } = getServerCookieData(context);
    const token = data?.token;

    if (!token) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    const userDetails = await getUser(token);

    return {
        props: {
            user: userDetails.user ?? null,
            error: userDetails.error ?? null,
        },
    };
}
