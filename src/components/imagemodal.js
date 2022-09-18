import React from "react"
import { Modal, CloseButton, Image } from "react-bootstrap"

const ImageModal = ({ show, hide, image }) => {
  return (
    <Modal
      show={show}
      onHide={hide}
      className="d-flex flex-column justify-content-center"
    >
      <Modal.Body className="d-flex flex-column container-xxl justify-content-center align-items-center w-100 h-100 bg-light">
        <Image src={image} className="preview" />
        <CloseButton onClick={hide}></CloseButton>
      </Modal.Body>
    </Modal>
  )
}

export default ImageModal
