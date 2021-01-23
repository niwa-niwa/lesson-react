import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 7Qey7Vvzs3r-tWpF54OuwTT7DHmN1xHoUFcycaGLh3E'
    }
})
