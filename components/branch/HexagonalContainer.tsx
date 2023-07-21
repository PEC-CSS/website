import React from 'react'
import styles from "../../styles/components/HexagonalContainer.module.scss";
import { HexGrid, Layout, Hexagon, Pattern } from '../common/ReactHexgrid'
import Link from 'next/link';

export default function HexagonalContainer() {
    const hexagonSize = { x: 12, y: 12 }
    const halfHexagonSize = { x: hexagonSize.x / 1.2, y: hexagonSize.y / 1.2 }
    return (
        <div className={styles.parent}>
            <HexGrid>
                <Layout size={hexagonSize} flat={true} spacing={1.2} origin={{ x: 0, y: 0 }}>
                    {
                        patterns.map((pattern, i) => 
                        <Link href={pattern.href} key={i + 20}>
                            <Hexagon q={pattern.q} r = {pattern.r} s={pattern.s} fill={pattern.id} />
                        </Link>)
                    }
                </Layout>

                {
                    patterns.map((pattern, i) => <Pattern key={i} link={pattern.link} id={pattern.id} size={pattern.size} />)
                }
            </HexGrid>
        </div>
    )
}

const patterns = [
    {
        id: 'mid',
        link: '/assets/logos/acm.png',
        size: {x: 10, y: 10},
        href: '/',
        q: 0, r: 0, s: 0,
    },

    {
        id: 'left-left',
        link: '/assets/logos/dev.png',
        size: {x: 10, y: 10},
        href: '/branches/dev',
        q: -1, r: 0, s: 1,
    },
    {
        id: 'left-mid',
        link: '/assets/logos/cp.png',
        size: {x: 10, y: 10},
        href: '/branches/cp',
        q: 0, r: -1, s: 1,
    },
    {
        id: 'left-right',
        link: '/assets/logos/ai.png',
        size: {x: 10, y: 10},
        href: '/branches/ai',
        q: 1, r: -1, s: 0,
    },

    {
        id: 'right-left',
        link: '/assets/logos/wit.png',
        size: {x: 10, y: 10},
        href: '/branches/wit',
        q: -1, r: 1, s: 0,
    },
    {
        id: 'right-mid',
        link: '/assets/logos/socials.png',
        size: {x: 10, y: 10},
        href: '/branches/socials',
        q: 0, r: 1, s: -1,
    },
    {
        id: 'right-right',
        link: '/assets/logos/cyber.png',
        size: {x: 10, y: 10},
        href: '/branches/cyber',
        q: 1, r: 0, s: -1,
    },
]