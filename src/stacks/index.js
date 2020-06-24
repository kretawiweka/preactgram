/**  @jsx h **/

import { h } from 'preact'

import { Provider } from 'stacks/context'

const Stacks = ({ children }) => {
	return <Provider>{children}</Provider>
}

export default Stacks
