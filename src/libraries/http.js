import axios from 'axios'

const http = ({ method = 'GET', path, data }) => {
  let url = process.env.API_HOST + path
  return axios({
    method,
    url,
    data: {
      ...data,
    },
  })
}

export default http
