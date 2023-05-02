import axios from 'axios';
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'b1c35ffd59d74977809c22eff4cccb0b'
    }
})