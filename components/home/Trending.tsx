import styles from "../../styles/components/Trending.module.scss";
import {fetchHomeTrending, fetchBranchTrending } from "../../utils/spreadsheet";
import {useEffect, useState} from "react";

export interface TrendingCard {
    title: String,
    description: String,
    image: String,
    href: String,
}

type Props = {
    trendingType : string;
}

export default function Trending({trendingType} : Props) {

    const [loading, setLoading] = useState(true);
    const [trendingInfo, setTrendingInfo] = useState<TrendingCard[] | null>();

    useEffect(() => {
        if(trendingType=="home"){
            fetchHomeTrending().then((res) => {
                setTrendingInfo(res);
                setLoading(false);      
            });
        }
        else{
            fetchBranchTrending(trendingType).then((res) => {
                setTrendingInfo(res);
                setLoading(false);      
            });
        }      
    }, [trendingType]);

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