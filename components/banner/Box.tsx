import styles from "../../styles/components/Banner.module.scss";
import {useEffect, useRef} from "react";

export const BannerBox = ({opacity, color}: { opacity: number, color: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (divRef.current!=null) {
            setTimeout(() => {
                if(divRef.current) {
                    divRef.current.style.backgroundColor = color; // Set the desired background color
                    divRef.current.style.opacity = `${opacity}`;
                } // i know redundant, but TS :(
            }, 0);
        }
    })
    return <div ref={divRef} className={styles.banner_box} style={{opacity: 0.05, backgroundColor: color}}/>
}