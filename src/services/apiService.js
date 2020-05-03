import axios from 'axios'

export class apiService {
    static request(url, type, data, headers, noStringify = false) {
        let bodyData = noStringify ? JSON.stringify(data) : data
        let service
        const config = {
            'headers': headers
        }

        if(type.toLowerCase() === 'get') {
            service = axios.get(url, config)
            return service.then(resp => {
                // console.log(resp);
                return service
            }).catch(error => {
                // console.log(error);
                return service
            })
        } else {
            service = axios.post(url, bodyData, config)
            return service.then(resp => {
                // console.log(resp);
                return service
            }).catch(error => {
                // console.log(error);
                return service
            })
        }
    }
}