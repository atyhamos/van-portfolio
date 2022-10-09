import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Modal, CloseButton } from "react-bootstrap"

const ImageModal = ({ show, hide, image }) => {
  console.log(image)
  return (
    <Modal
      show={show}
      onHide={hide}
      className="d-flex flex-column justify-content-center"
    >
      <Modal.Body className="d-flex flex-column container-xxl align-items-center bg-light position-fixed fixed-top mt-5">
        <CloseButton onClick={hide}></CloseButton>
        <GatsbyImage image={image} className="preview" />
      </Modal.Body>
    </Modal>
  )
}

export default ImageModal
