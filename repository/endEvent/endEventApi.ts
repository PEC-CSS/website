import {fetchWrapper} from '../../util/httpWrapper'

export async function endEventApi(
    participantsList: string[],
    contributorsList: string[],
    publicityList: string[],
    contributorXp: number,
    publicityXp: number,
    participantXp: number,
    eventId: number,
    token: string) {
    return await fetchWrapper.post(
        {
            url: `v1/events/${eventId}/end`,
            body: {
                contributors: contributorsList,
                publicity: publicityList,
                participants: participantsList,
                contributorXp: contributorXp,
                publicityXp: publicityXp,
                participantXp: participantXp
            },
            token: token
        }
    );
}