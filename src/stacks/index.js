/**  @jsx h **/

import { h } from 'preact'

import { Provider } from 'stacks/services/context'

const Stacks = ({ children }) => {
	return <Provider>{children}</Provider>
}

export default Stacks
