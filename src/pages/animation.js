import React, { useState } from "react"
import { motion } from "framer-motion"

import Seo from "../components/seo"
import NavigationBar from "../components/navigation"
import ImageModal from "../components/imagemodal"
import { graphql, useStaticQuery } from "gatsby"
import { Image } from "react-bootstrap"

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
  const data = useStaticQuery(graphql`
    query animations {
      allGraphCmsAnimation {
        nodes {
          animation {
            url
          }
        }
      }
    }
  `)
  const animations = data.allGraphCmsAnimation.nodes

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

        <div className="container-xxl p-4" style={{ maxWidth: "992px" }}>
          {animations.map(animation => {
            return (
              <div className="row bg-light">
                <Image
                  className="image-thumbnail"
                  src={animation.animation.url}
                />
              </div>
            )
          })}
        </div>
      </motion.main>
    </>
  )
}

export const Head = () => (
  <Seo title="Animation">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </Seo>
)

export default AnimationPage
