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
      <div className="container pt-4">
        <h2>Hello! I'm Van, an Illustrator and Animator from Singapore.</h2>
        <p>
          I love anything to do with myth, fantasy and romanticising daily life
          and ordinary people; and I try my best to communicate this through my
          art.
        </p>
        <p>
          I graduated with a{" "}
          <strong>Bachelor of Arts in Arts and Humanities</strong> from Yale-NUS
          College, a liberal arts university in Singapore. For my capstone
          project, I created a webcomic about diving into memory and confronting
          my younger self. You can read it here: www.forgettingbetter.com.
        </p>
        <p>
          I use Adobe Photoshop, Procreate, Clip Studio Paint, TV Paint, and
          Rough Animator.
        </p>
        <p>
          Thank you for stopping by! Feel free to contact me for any projects
          you'd like to work on together:{" "}
          <a
            href="mailto:vanessathian.ts@gmail.com"
            className="text-decoration-none link"
          >
            vanessathian.ts@gmail.com
          </a>
          <br />
          Be well!
        </p>
      </div>
    </motion.main>
  )
}

export const Head = () => <Seo title="Home"></Seo>

export default AboutPage
