import { h, Fragment } from 'preact'

const Modal = (props) => {
  return (
    <Fragment>
      {props.isOpen ? <div className="modal">{props.children}</div> : null}
    </Fragment>
  )
}

export default Modal
