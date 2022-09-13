import React from "react";
import styled from 'styled-components'
import HorizontalCarousel from '../../components/HorizontalCarousel';



function EventsCarouselLayout(props) {
  const { items } = props
  return (
        <HorizontalCarousel items={items} />
  )
}

export default EventsCarouselLayout