import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return status < 400 || status===401;
  },
  withCredentials: true,
})

client.interceptors.response.use(async (res) => {
  const {config, status} = res
  if (status===401) {
    throw new Error("refresh token")
  }
  return res
})
const onSuccess = function (response: any) {
  console.log("Request Successful!", response.data)
  return response.data
}
const onError = function (error: any) {
  console.log("Request Failed:", error)
  throw new Error(error)
}

export const request = async function (options: any) {
  return client(options).then(onSuccess).catch(onError)
}

