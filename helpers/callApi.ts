import axios from "axios";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(
        config => {

            return config
        },

        error => { throw error }
    )

    axiosInstance.interceptors.response.use(
        response => {

            return response
        },

        error => { throw error }
    )

    return axiosInstance
}

export default callApi
