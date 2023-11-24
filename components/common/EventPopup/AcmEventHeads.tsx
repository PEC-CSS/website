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
        }, 500)
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
                />
            </div>

            <div>
                {
                    showSearchResults &&
                    <div className={styles['pills-container']}>
                        {searchResult.map((pill: Pill) =>
                            <div
                                onClick={() => addUserToPills(pill)}
                                key={pill.email}
                                className={styles['pill']}
                            >
                                {pill.name}
                                <p>
                                    {pill.email}
                                </p>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
}