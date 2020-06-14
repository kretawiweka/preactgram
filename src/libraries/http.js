import axios from 'axios'

const http = () => {
  return axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone',
    },
  })
}

export default http
