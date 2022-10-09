import React, { useState } from "react"
import { motion } from "framer-motion"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import NavigationBar from "../components/navigation"
import ImageModal from "../components/imagemodal"
import { Image } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

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
  const data = useStaticQuery(graphql`
    query drawings {
      allGraphCmsLifeDrawing {
        nodes {
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              quality: 5
            )
          }
        }
      }
    }
  `)
  const drawings = data.allGraphCmsLifeDrawing.nodes
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
            {drawings.map(drawing => {
              return (
                <div
                  className="col-sm-3 bg-light p-0 d-flex align-content-center justify-content-center"
                  onClick={() => toggleModal(drawing.image.gatsbyImageData)}
                >
                  <GatsbyImage
                    className="image-thumbnail"
                    image={drawing.image.gatsbyImageData}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </motion.main>
    </>
  )
}

export const Head = () => (
  <Seo title="Life Drawing">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </Seo>
)

export default LifeDrawingPage
