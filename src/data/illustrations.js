import links from "./links.json"

export const illustrations = links.data.hygraph.photos.map(
  photo => photo.image.url
)
