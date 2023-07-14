import React, { useEffect, useState } from 'react'
import styles from "../../../styles/components/NextEventCard.module.scss"
import Link from 'next/link';

interface EventInfo {
    title: string;
    startTime?: string;
    href: string;
}

export default function NextEventCard() {

    const [loading, setLoading] = useState(false);
    const [eventInfo, setEventInfo] = useState<EventInfo | null>();

    useEffect(() => {
        fetchUpcomingEvent().then((res) => {
            // TODO
        })
    })

    const fetchUpcomingEvent = async () => {
        // TODO
    }

    return (
         loading 
         
            ? <div className={`${styles.card} ${styles.suspense}`}>
                <h2></h2>
                <div></div>
                <div></div>
                <button></button>
            </div>
            
            : <div className={styles.card}>
                <h2> 
                    Introduction to BigName
                </h2>
                <div>
                    <p className={styles.startTime}>
                        starts in
                    </p>
                    <span className={`${styles.startTime} ${styles.bold}`}> 2h 59min </span>
                </div>
                <button>Register</button>
            </div>
    )
}
