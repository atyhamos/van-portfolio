import React, { useState } from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"

import NavigationBar from "../components/navigation"
import { Image } from "react-bootstrap"
import ImageModal from "../components/imagemodal"
import { GatsbyImage } from "gatsby-plugin-image"

const IllustrationPage = () => {
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
    query illustrations {
      allGraphCmsPhoto {
        nodes {
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              quality: 50
            )
          }
        }
      }
    }
  `)
  const illustrations = data.allGraphCmsPhoto.nodes

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
            {illustrations.map(illustration => {
              return (
                <div
                  className="col-sm-6 col-lg-4 bg-light p-0 d-flex align-content-center justify-content-center"
                  onClick={() =>
                    toggleModal(illustration.image.gatsbyImageData)
                  }
                >
                  <GatsbyImage
                    image={illustration.image.gatsbyImageData}
                    className="image-thumbnail"
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
  <Seo title="Illustration">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </Seo>
)

export default IllustrationPage
