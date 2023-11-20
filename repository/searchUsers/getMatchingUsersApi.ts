import {fetchWrapper} from '../../util/httpWrapper'

export async function getMatchingUsersApi(pattern: string, token: string) {
    pattern = pattern.replace(/\s/g, '')
    // remove all empty spaces in the pattern since the api compares the pattern with user email id
    return await fetchWrapper.get(
        {
            url: `v1/user/search?query=${pattern}`,
            token: token
        }
    );
}