import {fetchWrapper} from '../../../util/httpWrapper'

export async function getMatchingUsersApi(
    participantsList: string[],
    organizersList: string[],
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
                contributors: organizersList,
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