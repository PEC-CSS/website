import styles from "../../styles/components/Trending.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTrendingState } from "../../redux/slices/trendingSlice";

export interface TrendingCard {
    title: string;
    description: string;
    image: string;
    content: string;
    branch: string;
}

type Props = {
    trendingType: string;
};

export default function Trending({ trendingType }: Props) {
    const trendingData = useSelector(selectTrendingState);
    const [trendingInfo, setTrendingInfo] = useState<TrendingCard[] | null>();

    useEffect(() => {
        const filteredCards = trendingData.trendingCards.filter(
            (trendingCard) =>
                trendingCard.branch === trendingType || trendingType === "home"
        );
        setTrendingInfo(
            filteredCards.slice(Math.max(filteredCards.length - 3, 0))
        );
    }, [trendingData, trendingType]);

    return (
        <div className={styles.trending_cards}>
            {trendingData.loading || trendingInfo == null ? (
                Array.apply(null, Array(3)).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className={`${styles.trending_card} ${styles.loading}`}
                        >
                            <h4 />
                            <p />
                            <p />
                            <p />
                            <p className={styles.half} />
                        </div>
                    );
                })
            ) : trendingInfo?.length === 0 ? (
                <p style={{ textAlign: "center" }}>
                    Coming soon! Get ready for exciting trending content. Stay
                    tuned! 🚀
                </p>
            ) : (
                trendingInfo?.map((info, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.trending_card}
                            style={{
                                backgroundImage: `url(${info.image})`,
                                backgroundSize: "contain",
                            }}
                        >
                            <h4>{info.title}</h4>
                            <p>{info.description}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
}
