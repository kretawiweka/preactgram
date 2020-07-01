export const LOAD_COMMENT = 'LOAD_COMMENT'
export const SUCCESS_LOAD_COMMENT = 'SUCCESS_LOAD_COMMENT'
export const FAILED_LOAD_COMMENT = 'FAILED_LOAD_COMMENT'

export const loadComment = () => {
	return {
		type: LOAD_COMMENT,
	}
}

export const successLoadComment = (data) => {
	return {
		type: SUCCESS_LOAD_COMMENT,
		data,
	}
}

export const failedLoadComment = () => {
	return {
		type: FAILED_LOAD_COMMENT,
	}
}
