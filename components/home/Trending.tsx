import styles from "../../styles/components/Trending.module.scss";
import {useEffect, useState} from "react";

interface TrendingCard {
    title: String,
    description: String,
    image: String,
    href: String,
}

export default function Trending() {

    const [loading, setLoading] = useState(true);
    const [trendingInfo, setTrendingInfo] = useState<TrendingCard[] | null>();

    useEffect(() => {
        fetchTrending().then((res) => {
            setLoading(false);

            // TODO
            // setTrendingInfo(
            //
            // );
        });

    })

    const fetchTrending = async () => {
    }

    return <div className={styles.trending_cards}>
        {
            (loading || trendingInfo == null) ?
                Array.apply(null, Array(3)).map((_, i) => {
                    return <div key={i} className={`${styles.trending_card} ${styles.loading}`}/>
                })
                :
                trendingInfo?.map((info, index) => {
                    return <div key={index} className={styles.trending_card} style={{
                        backgroundImage: `url(${info.image})`,
                        backgroundPosition: 'center'
                    }}>
                        <h4>
                            {info.title}
                        </h4>
                        <p>{info.description}</p>
                    </div>
                })
        }
    </div>
}