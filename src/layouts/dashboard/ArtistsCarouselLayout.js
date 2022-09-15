import React from "react";
import ArtistsHorizontalCarousel from '../../components/ArtistsHorizontalCarousel';


function ArtistsCarouselLayout(props) {
  const { items, saveUserSelection } = props
  console.log(items)
  return (
        <ArtistsHorizontalCarousel items={items} saveUserSelection={saveUserSelection} />
  )
}

export default ArtistsCarouselLayout