import styles from "../../styles/components/Banner.module.scss";
import {BannerBox} from "./Box";
import {Common} from "../../constants/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Banner({heading, color=Common.primaryColor}: {heading?: string | JSX.Element, color?: string}) {
    const [matrix, setMatrix] = useState<Array<Array<number>>>();
    const router = useRouter();

    useEffect(()=> {
        setTimeout ( () => {
            setMatrix(getArray())
        },
        1500)    
    })

    function getArray() {
        let matrix = new Array<Array<number>>(9);
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = new Array<number>(200); // kind of infinity when it comes to screens (15 x 200px = 3000px)
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = 0.9;
            }
        }
    
        // generate opacity : can be improved
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[i][j] = Math.random()*0.6;
                if(i>2) {
                    matrix[i][j] = Math.random()*0.4;
                }
                if (i>4) {
                    matrix[i][j] = Math.random()*0.2
                }
                if(i>6) {
                    matrix[i][j] = Math.random()*0.1;
                }
                if(i>7) {
                    matrix[i][j] = Math.random()*0.05;
                }
            }
        }
        return matrix;
    }

    return <div className={styles.banner}>
        {matrix?.map((row, i) => {
            return <div key={i} className={styles.banner_row}>
                {
                    row.map((opacity, boxId) => {
                        return <BannerBox key={i*row.length + boxId} color={color} opacity={opacity}/>
                    })
                }
            </div>
        })}
        <h3>{heading}</h3>
    </div>
}