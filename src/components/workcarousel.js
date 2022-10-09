import React from "react"
import { Carousel } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WorkCarousel = () => {
  const data = useStaticQuery(graphql`
    query works {
      allGraphCmsAsset(limit: 10) {
        nodes {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
            quality: 50
          )
        }
      }
    }
  `)
  const works = data.allGraphCmsAsset.nodes
  return (
    <div className="container-xxl mt-5">
      <Carousel variant="dark">
        {works.map(work => {
          return (
            <Carousel.Item style={{ height: "600px" }}>
              <GatsbyImage
                image={work.gatsbyImageData}
                className="carousel-work"
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default WorkCarousel
