import {Pill} from "./Pill"
import PillContainer from "./PillContainer";
import React, {useEffect, useState} from "react";
import {getMatchingUsersApi} from "../../../pages/api/searchUsers/getMatchingUsersApi";
import {useSession} from "next-auth/react";
import getCookieData from "../../../lib/getCookieData";
import {User} from '../../../types/user'
import CustomTextField from "../CustomTextField/CustomTextField";

type Props = {
    teamTitle: string
}
export default function AcmEventPeeps({teamTitle}: Props) {
    const [nameSearchValue, setNameSearchValue] = useState("")
    const [pills, setPills] = useState<Pill[]>([])
    const [searchResult, setSearchResult] = useState<Pill[]>([])

    const {data: session} = useSession();

    const token = getCookieData(session).data.token

    const searchUsersApi = (pattern: string) => getMatchingUsersApi(pattern, token)
        .then((response : User[]) => {
            // take first 5 only
            response = response.slice(0, 5)
            // remove already added pills
            response = response.filter( (user) => {
                    const foundPill = pills.find(pillObject =>
                        pillObject.email == user.email
                    )
                    return !foundPill
                }
            )

            setSearchResult(response.map((user: User) => {
                return {
                    name: user.name,
                    email: user.email
                }
            }))
        })
        .catch((error) => console.log(error))

    const handleDelete = (email: string) => {
        setPills((prevState) => prevState.filter((pill) => pill.email != email))
    }

    const addUserToPills = (pill: Pill): void => {
        const foundPill = pills.find(pillObject => pillObject.name == pill.name && pillObject.email == pill.email)
        if (!foundPill) {
            setNameSearchValue("")
            setSearchResult([])
            setPills((prevState) => {
                return [...prevState, pill];
            });
        }
    }

    const handleNameSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameSearchValue(e.target.value)
        if (e.target.value.trim() === "") {
            setSearchResult([]);
        } else {
            await searchUsersApi(e.target.value)
        }
    }

    return (
        <div style={{
            display: "flex",
            margin: "30px",
        }}>
            <div style={{
                width: "300px"
            }}>
                {/*<p style={{margin: "10px"}}>{teamTitle}</p>*/}
                <div style={{
                    width:"300px",
                    padding:"20px"
                }}>
                    <CustomTextField
                        type="text"
                        onChange={handleNameSearchChange}
                        value={nameSearchValue}
                        label={`Search ${teamTitle}`}
                        fullWidth={true}
                        variant="filled"
                    />

                    <div>
                        {
                            searchResult.map((pill: Pill) =>
                                <p
                                    onClick={() => addUserToPills(pill)}
                                    key={pill.email}
                                    style={{
                                        height: "40px",
                                        borderRadius: "10px",
                                        padding: "5px"
                                    }}
                                >
                                    {pill.name}
                                    <p style={{
                                        color:"grey",
                                        fontSize:"small",
                                    }}>{pill.email}</p>
                                </p>)
                        }
                    </div>
                </div>
            </div>

            <PillContainer handleDelete={handleDelete} pills={pills}/>
        </div>
    )

}