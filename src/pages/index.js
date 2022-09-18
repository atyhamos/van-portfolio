import React, { useEffect } from "react"

import Seo from "../components/seo"
import NavigationBar from "../components/navigation"
import { motion, useAnimationControls } from "framer-motion"
import FadeIntro from "../components/fadeintro"
import WorkCarousel from "../components/workcarousel"

const IndexPage = () => {
  const controls = useAnimationControls()
  const storage = window.localStorage
  const timestamp = JSON.parse(storage.getItem("timestamp") || "1000")

  const timeLimit = 10 * 60 * 1000 // 10 minutes

  const loadIntro = Date.now() - timestamp > timeLimit

  useEffect(() => {
    loadIntro
      ? storage.setItem("timestamp", Date.now().toString())
      : storage.setItem("timestamp", timestamp.toString())
  }, [])

  if (loadIntro) {
    return (
      <>
        <FadeIntro controls={controls} />
        <motion.main
          initial={{ x: "5%", opacity: 0 }}
          animate={controls} // to control animation sequence
        >
          <NavigationBar />
          <WorkCarousel />
        </motion.main>
      </>
    )
  }
  return (
    <motion.main
      initial={{ x: "5%", opacity: 0 }}
      animate={{ x: 0, opacity: [0, 1], transition: { duration: 1 } }}
    >
      <NavigationBar />
      <WorkCarousel />
    </motion.main>
  )
}

export const Head = () => <Seo title="Home"></Seo>

export default IndexPage
