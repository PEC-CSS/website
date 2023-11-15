import {Pill} from "./Pill"
import PillComponent from "./Pill"

type Props = {
    pills: Pill[],
    handleDelete: any
}

export default function PillContainer({ pills, handleDelete }: Props) {
    return <div style={{
        display:"flex",
        flexWrap:"wrap",
        // border:"dotted",
        border: "none",
        // borderColor:"lightpink",
        // borderRadius:"10px",
        // padding:"4px",
        // minHeight:"40px",
        // width: "100%",
    }}>
        {pills.map( (pill) => <PillComponent key={Math.random()} pill={pill} handleDelete={handleDelete} />)}
    </div>
}