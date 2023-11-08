import {fetchWrapper} from '../../../util/httpWrapper'

export async function getMatchingUsernamesApi(pattern: string, token: string) {
    pattern = pattern.replace(' ', '')
    return await fetchWrapper.get(
        {
            url: 'v1/user/search' + '?query=' + pattern,
            token: token
        }
    );
}