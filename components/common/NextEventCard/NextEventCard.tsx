import React, { useEffect, useState } from 'react'
import styles from "../../../styles/components/NextEventCard.module.scss"

interface EventInfo {
    title: string;
    startTime?: string;
    href: string;
}

export default function NextEventCard({branch = "none"} : {branch?: string}) {

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
                <h2 />
                <p className={styles.full} />
                <p className={styles.full} />
                <p />
                <button></button>
            </div>
            
            : <div className={styles.card}>
                <h2> 
                    General Body Meet
                </h2>
                <div>
                    <p className={styles.startTime}>
                        Stay tuned for more info!
                    </p>
                    {/* <span className={`${styles.startTime} ${styles.bold}`}> 2h 59min </span> */}
                </div>
                <button name={branch} disabled>Register</button>
            </div>
    )
}
