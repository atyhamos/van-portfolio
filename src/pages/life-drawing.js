import React, { useState } from "react"
import { motion } from "framer-motion"
import Seo from "../components/seo"

import NavigationBar from "../components/navigation"
import ImageModal from "../components/imagemodal"

const LifeDrawingPage = () => {
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

        <div className="container-xxl p-4 ">
          <div className="row justify-content-between">
            <h1>Life Drawings</h1>
          </div>
        </div>
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

export default LifeDrawingPage
