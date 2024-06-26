import axios, { AxiosInstance, AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";

const TOKEN : string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDBmOGQ2MjhhNTE4ZGQ1NjVkOTYyMWFiMmVkOWFiMSIsIm5iZiI6MTcxOTI2Mzc4MC45NDAzNzIsInN1YiI6IjY2NzlkYzJjZWY0ZDg1M2YxODRkNzQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.80trBeVRci2nxnHzMvlJo6sfeMRn9bS1W39DJqicdos"

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${TOKEN}`
  return request
}, (error) => {
  console.error(error)
  return Promise.reject(error)
})

apiClient.interceptors.response.use((response) => {  
  return response
}, (error) => {
  console.error(error.response.statusText, error.response.status)
  return Promise.reject(error)
})

export default apiClient;