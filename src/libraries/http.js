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
		.then((response) => {
			return response
		})
		.catch((error) => {
			throw error
		})
}

export default http
