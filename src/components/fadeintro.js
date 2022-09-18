import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FadeIntro = ({ controls }) => {
  const [isFadeIn, setIsFadeIn] = useState(true)
  return (
    <AnimatePresence>
      {isFadeIn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3 }}
          onAnimationComplete={() => {
            controls.start({
              x: 0,
              opacity: [0, 1],
              transition: { duration: 1 },
            })
            setIsFadeIn(false)
          }}
          className="vw-100 vh-100 d-flex justify-content-center align-items-center position-absolute"
        >
          <h1>Hi, I'm Van!</h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FadeIntro
