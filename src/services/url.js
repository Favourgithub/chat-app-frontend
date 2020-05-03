// const BASEURL = "http://192.168.43.143:3001"
const BASEURL = "http://localhost:3001"

export const routes = {
    BASEURL,

    // AUTH
    REGISTER: `${BASEURL}/api/register`,
    LOGIN: `${BASEURL}/api/login`,
    LOGOUT: `${BASEURL}/api/logout`,

    GETUSERS: `${BASEURL}/api/users`,

    SOCKET: `${BASEURL}`,
    GETROOM: `${BASEURL}/api/createRoom`,
    GETCHAT: `${BASEURL}/api/getchat`,
}