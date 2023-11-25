import { Pill } from "./Pill"
import PillContainer from "./PillContainer";
import React, { useCallback, useEffect, useState } from "react";
import { getMatchingUsersApi } from "../../../repository/searchUsers/getMatchingUsersApi";
import { useSession } from "next-auth/react";
import getCookieData from "../../../lib/getCookieData";
import { User } from '../../../types/user'
import { useDebouncedCallback } from "use-debounce";
import styles from "../../../styles/components/AcmEventHeads.module.scss";
type Props = {
    teamTitle: string,
    pills: Pill[],
    setPills: React.Dispatch<React.SetStateAction<Pill[]>>
    setEmptyError: any
}

export default function AcmEventHeads({ teamTitle, pills, setPills, setEmptyError }: Props) {
    const [nameSearchValue, setNameSearchValue] = useState("")
    const [debouncedValue, setDebouncedValue] = useState("")
    const [searchResult, setSearchResult] = useState<Pill[]>([])
    const [showSearchResults, setShowSearchResults] = useState(true)
    const { data: session } = useSession();
    const token = getCookieData(session).data.token
    const [cursor, setCursor] = useState(-1)
    const [mousePointer, setMousePointer] = useState(-1)

    const searchUsersApi = useCallback((pattern: string) => {
        getMatchingUsersApi(pattern, token)
            .then((response: User[]) => {
                // take first 5 only
                response = response.slice(0, 5)
                // remove already added pills
                response = response.filter((user) => {
                    const foundPill = pills.find(pillObject =>
                        pillObject.email == user.email
                    )
                    return !foundPill
                })

                setSearchResult(response.map((user: User) => {
                    return {
                        name: user.name,
                        email: user.email
                    }
                }))
            })
            .catch((error) => console.log(error))
    }
        , [pills, token])

    useEffect(() => {
        if (!debouncedValue || debouncedValue.trim() === "") {
            setSearchResult([])
        }
        else {
            searchUsersApi(debouncedValue)
        }
    }, [debouncedValue, searchUsersApi]);

    const handleDelete = (email: string) => {
        setPills((prevState) => prevState.filter((pill) => pill.email != email))

    }

    const addUserToPills = (pill: Pill): void => {
        const foundPill = pills.find(pillObject => pillObject.name == pill.name && pillObject.email == pill.email)
        if (!foundPill) {
            setNameSearchValue("")
            setDebouncedValue("")
            setSearchResult([])
            setCursor(-1)
            setEmptyError(false)
            setPills((prevState) => {
                return [...prevState, pill];
            });
        }
    }

    const handleDebouncedInput = useDebouncedCallback(
        (value) => {
            setDebouncedValue(value);
        },
        250
    );

    const handleNameSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowSearchResults(true)
        setNameSearchValue(e.target.value)
        handleDebouncedInput(e.target.value)
    }

    const handleBlur = () => {
        setTimeout ( () => {
            setShowSearchResults(false)
            setCursor(-1)
        }, 500)
    }

    const keyboardNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (cursor < searchResult.length && cursor != -1) {
                addUserToPills(searchResult[cursor])
            }
        }
        if (e.key === "ArrowUp") {
            if (cursor > 0) {
                setCursor( cursor => cursor - 1)
            }
        }
        if (e.key === "ArrowDown") {
            if (cursor < searchResult.length - 1) {
                setCursor( cursor => cursor + 1)
            }
        }
        if (e.key === "Escape") {
            setShowSearchResults(false)
            setCursor(-1)
        }
    }

    return (
        <div className={styles['acm-event-heads-container']}>
            <div className={styles.pillInputDiv}>
                <PillContainer handleDelete={handleDelete} pills={pills} />
                <input
                    type="text"
                    onChange={handleNameSearchChange}
                    value={nameSearchValue}
                    className={styles.pillInput}
                    placeholder={`Search ${teamTitle}*`}
                    onBlur={handleBlur}
                    onKeyDown={keyboardNavigation}
                />
            </div>

            <div>
                {
                    showSearchResults &&
                    <ul className={styles['pills-container']}>
                        {searchResult.map((pill: Pill) => {
                            const idxOfPill = searchResult.indexOf(pill)
                            return <div
                                onClick={() => addUserToPills(pill)}
                                key={pill.email}
                                style={{
                                    backgroundColor: cursor === idxOfPill || mousePointer === idxOfPill ? "#0a69da" : "white",
                                    color: cursor === idxOfPill || mousePointer === idxOfPill ? "white" : "black",
                                    padding: '10px',
                                    margin: 0,
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setCursor(searchResult.indexOf(pill))}
                                onMouseLeave={() => setCursor(-1)}
                            >
                                {pill.name}
                                <p
                                    style={{
                                        color: cursor === searchResult.indexOf(pill) || mousePointer === idxOfPill ? "white" : "grey",
                                        fontSize: 'small',
                                        overflow: 'clip',
                                        margin: 0
                                    }}
                                >
                                    {pill.email}
                                </p>
                            </div>
                        }

                        )}
                    </ul>
                }
            </div>
        </div>
    );
}