import React, { useState } from "react"
import { motion } from "framer-motion"

import Seo from "../components/seo"
import NavigationBar from "../components/navigation"
import { Image } from "react-bootstrap"
import ImageModal from "../components/imagemodal"
import { animations } from "../data/animations"

const AnimationPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  const toggleModal = (image = null) => {
    if (modalOpen) {
      setModalOpen(false)
      return
    }
    setModalImage(image)
    setModalOpen(true)
  }

  const blurStyles = {
    webkitFilter: "blur(1px)",
    mozFilter: "blur(1px)",
    oFilter: "blur(1px)",
    msFilter: "blur(1px)",
    filter: "blur(1px)",
  }

  return (
    <>
      <ImageModal
        show={modalOpen}
        hide={() => setModalOpen(false)}
        image={modalImage}
      />

      <motion.main
        initial={{ x: "5%", opacity: 0 }}
        animate={{ x: 0, opacity: [0, 1], transition: { duration: 1 } }}
        style={modalOpen ? blurStyles : {}}
      >
        <NavigationBar />

        {/* <div className="container-xxl p-4 ">
          <div className="row justify">
            {animations.map(animation => {
              return (
                <div className="col-sm-6 col-lg-4 bg-light p-0 d-flex align-content-center justify-content-center">
                  <Image
                    className="image-thumbnail"
                    src={animation}
                    onClick={() => toggleModal(animation)}
                  />
                </div>
              )
            })}
          </div>
        </div> */}

        <div className="container-xxl p-4" style={{ maxWidth: "992px" }}>
          {animations.map(animation => {
            return (
              <div className="row bg-light">
                <Image
                  className="image-thumbnail"
                  src={animation}
                  onClick={() => toggleModal(animation)}
                />
              </div>
            )
          })}
        </div>
        {/* </div> */}
        {/* <div className="container-xxl p-4 ">
          <div className="row justify-content-between">
            <div className="col-sm-4 col-xxl-6">
              <img
                className="card-img-bottom thumbnail"
                src={a1}
                onClick={() => toggleModal(a1)}
              />
            </div>
            <div className="col-sm-4 col-lg-3">
              <img
                className="card-img-bottom thumbnail"
                src={a2}
                onClick={() => toggleModal(a2)}
              />
            </div>
            <div className="col-sm-4 col-lg-3">
              <img
                className="card-img-bottom thumbnail"
                src={a3}
                onClick={() => toggleModal(a3)}
              />
            </div>
          </div>
        </div> */}
      </motion.main>
    </>
  )
}

export const Head = () => (
  <Seo title="Illustration">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </Seo>
)

export default AnimationPage
