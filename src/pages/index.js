import React from "react"

import Seo from "../components/seo"
import NavigationBar from "../components/navigation"
import { motion, useAnimationControls } from "framer-motion"
import FadeIntro from "../components/fadeintro"
import WorkCarousel from "../components/workcarousel"

const IndexPage = ({ location }) => {
  const controls = useAnimationControls()
  if (location.hash) {
    return (
      <motion.main
        id="main"
        initial={{ x: "5%", opacity: 0 }}
        animate={{ x: 0, opacity: [0, 1], transition: { duration: 1 } }}
      >
        <NavigationBar />
        <WorkCarousel />
      </motion.main>
    )
  }
  return (
    <>
      <FadeIntro controls={controls} />
      <motion.main
        id="main"
        initial={{ x: "5%", opacity: 0 }}
        animate={controls} // to control animation sequence
      >
        <NavigationBar />
        <WorkCarousel />
      </motion.main>
    </>
  )
}

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage
