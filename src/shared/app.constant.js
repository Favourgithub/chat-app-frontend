export const SystemConstant = {
    HEADER: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Access-Control-Allow-Credentials': true
    },
    VERB: {
        POST: "POST",
        GET: "GET"
    },
    TOKEN: (token) => {
        return {
            "Authorization": `Bearer ${token}`
        }
    }
}