import React from "react";
import styled from 'styled-components'
import ArtistsHorizontalCarousel from '../../components/ArtistsHorizontalCarousel';



function ArtistsCarouselLayout(props) {
  const { items, setUserSelection } = props
  console.log(items)
  return (
        <ArtistsHorizontalCarousel items={items} setUserSelection={setUserSelection} />
  )
}

export default ArtistsCarouselLayout