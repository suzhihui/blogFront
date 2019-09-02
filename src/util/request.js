import axios from 'axios'
import queryString from 'query-string'
axios.defaults.timeout = 10000

const HTTP_HEADER = {
    'Content-Type': 'application/json',
}

const GATEWAY = 'http://120.77.219.106:7001'
// const GATEWAY = 'http://127.0.0.1:7001'

class _request {
    async get(url, params) {
        const _url = params
            ? `${url}?${queryString.stringify(params)}`
            : `${url}`
        let config = {
            url: `${GATEWAY}${_url}`,
            method: 'get',
            headers: HTTP_HEADER,
        }
        const result = await axios(config)
        return result
    }
}

const request = new _request()
export default request
