import {RxCross1} from "react-icons/rx";
import {Console} from "inspector";

export type Pill = {
    email: string,
    name: string
}

type Props = {
    pill : Pill,
    handleDelete: any
}

export default function PillComponent( { pill, handleDelete } : Props) {
    return <div style={{
        borderRadius:"8px",
        backgroundColor:"lightpink",
        padding: "4px 10px",
        margin: "3px",
        width: "min-content",
        fontSize: "small",
        color:"purple",
        display:"flex",
        alignItems:"center",
        height:"30px"
    }}>
        <div style={{marginRight:"8px"}}>
            {pill.name.split(' ')[0]}
        </div>
        <RxCross1 onClick={() => {
            handleDelete(pill.email)
        }}/>
    </div>
}