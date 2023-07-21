import React from 'react'
import { HexGrid, Layout, Hexagon, Path, Hex, Pattern } from '../common/ReactHexgrid'

export default function HexagonalContainer() {
    const hexagonSize = { x: 12, y: 12 }
    const halfHexagonSize = { x: hexagonSize.x / 1.2, y: hexagonSize.y / 1.2 }
    return (
        <div>
            <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
                <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>

                    {/* Middle one */}
                    <Hexagon q={0} r={0} s={0} fill='mid' />

                    {/* Top three */}
                    <Hexagon q={-1} r={0} s={1} fill='left-left' />
                    <Hexagon q={0} r={-1} s={1} fill='left-mid' />
                    <Hexagon q={1} r={-1} s={0} fill='left-right' />

                    {/* Bottom three */}
                    <Hexagon q={-1} r={1} s={0} fill='right-left' />
                    <Hexagon q={0} r={1} s={-1} fill='right-mid' />
                    <Hexagon q={1} r={0} s={-1} fill='right-right' />

                    <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
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
        link: 'https://cdn.discordapp.com/emojis/992724051686596608.webp?size=128&quality=lossless',
        size: {x: 10, y: 10},
    },

    {
        id: 'left-left',
        link: 'https://cdn.discordapp.com/emojis/992724051686596608.webp?size=128&quality=lossless',
        size: {x: 10, y: 10},
    },
    {
        id: 'left-mid',
        link: 'https://cdn.discordapp.com/emojis/992724051686596608.webp?size=128&quality=lossless',
        size: {x: 10, y: 10},
    },
    {
        id: 'left-right',
        link: 'https://cdn.discordapp.com/emojis/992724051686596608.webp?size=128&quality=lossless',
        size: {x: 10, y: 10},
    },

    {
        id: 'right-left',
        link: 'https://cdn.discordapp.com/emojis/992724051686596608.webp?size=128&quality=lossless',
        size: {x: 10, y: 10},
    },
    {
        id: 'right-mid',
        link: 'https://cdn.discordapp.com/emojis/992724051686596608.webp?size=128&quality=lossless',
        size: {x: 10, y: 10},
    },
    {
        id: 'right-right',
        link: 'https://cdn.discordapp.com/emojis/992724051686596608.webp?size=128&quality=lossless',
        size: {x: 10, y: 10},
    },
]