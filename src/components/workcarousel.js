import React from "react"
import { Carousel, Image } from "react-bootstrap"
import { illustrations } from "../data/illustrations"
import { animations } from "../data/animations"

const works = [...illustrations, ...animations]

const WorkCarousel = () => {
  return (
    <div className="container-xxl mt-5">
      <Carousel variant="dark">
        {works.map(work => {
          return (
            <Carousel.Item style={{ height: "600px" }}>
              <Image src={work} className="carousel-work" />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default WorkCarousel
