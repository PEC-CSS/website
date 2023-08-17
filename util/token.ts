import { setCookie, parseCookies } from 'nookies'
import { Common } from '../constants/common'

const cookies = parseCookies()
export const token = cookies[Common.AUTHORIZATION]