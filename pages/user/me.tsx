import DashboardLayout from "../../components/layout/DashboardLayout";
import styles from "../../styles/pages/me.module.scss";
import { GetServerSidePropsContext } from "next";
import { Common } from "../../constants/common";
import Image from "next/image";
import React, { useState } from "react";
import { getUser } from "../../repository/user";
import { User } from "../../types/user";
import { ErrorResponse } from "../../types/response/errorResponse";
import { Avatar } from "@mui/material";
import getServerCookieData from "../../lib/getServerCookieData";

function MyProfile({
    user,
    error,
}: {
    user: User | null;
    error: ErrorResponse | null;
}) {
    const [selectedTab, setSelectedTab] = useState(0);

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
                        selectedTab == 0 ? styles.active : ""
                    }`}
                    onClick={() => setSelectedTab(0)}
                >
                    Events
                </button>
                <button
                    className={`${styles.MenuButton} ${
                        selectedTab == 1 ? styles.active : ""
                    }`}
                    onClick={() => setSelectedTab(1)}
                >
                    History
                </button>
            </div>

            <div>
                {selectedTab === 0 ? (
                    <div className={styles.cardcontainer}>
                        <div className={styles.outtercard}>
                            <div className={styles.card}>
                                <div className={styles.cardcontent}>
                                    <p>No Events Found</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.cardcontainer}>
                        <div className={styles.outtercard}>
                            <div className={styles.card}>
                                <div className={styles.cardcontent}>
                                    <p>No History Found</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}

export default MyProfile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {data} = getServerCookieData(context);
    const token = data?.token;
    
    console.log(token);

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
