import {RxCross1} from "react-icons/rx";

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
        backgroundColor:"#0075FF",
        padding: "4px 5px",
        margin: "2px",
        marginBottom: "5px",
        width: "min-content",
        fontSize: "12px",
        color:"white",
        display:"flex",
        alignItems:"center",
        height:"25px"
    }}>
        <div style={{marginRight:"8px"}}>
            {pill.name.split(' ')[0]}
        </div>
        <RxCross1 onClick={() => {
            handleDelete(pill.email)
        }}/>
    </div>
}