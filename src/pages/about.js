import React from "react"
import Seo from "../components/seo"
import NavigationBar from "../components/navigation"
import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <motion.main
      initial={{ x: "5%", opacity: 0 }}
      animate={{ x: 0, opacity: [0, 1], transition: { duration: 1 } }}
    >
      <NavigationBar />
      <div className="container-xxl pt-4">
        <h1>About me</h1>
        <p className="lead">
          Hello! I'm an illustrator and animator from Singapore.
        </p>
        <p>
          In terms of what I like to watch and draw, I enjoy subtle, quiet,
          beautiful things, as well as very quick Sakuga action scenes. Gotta
          love 'em all. I'm currently working on my capstone at Yale-NUS
          College. It's a comic about delving into memory and I'm very excited
          to share it with you once it's done.
        </p>
        <p>
          Thank you for stopping by my page in the meantime! I love working on
          projects with others, so if there's anything you'd like to bring to
          life with my help, please drop me a message below!
        </p>
        <p>
          Software used for everything you've seen here: Adobe Photoshop,
          Procreate, Clip Studio Paint, TV Paint, and of course some good ol'
          pencil-and-paint-on-sketchbook action, too.
        </p>
      </div>
    </motion.main>
  )
}

export const Head = () => <Seo title="Home"></Seo>

export default AboutPage
