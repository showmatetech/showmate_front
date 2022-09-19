import React, { useRef, useState } from "react";
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import EventCard from './EventCard';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 46%;
    bottom: 54%;
    right: 0%;
    left: 0%;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom:  10%;
    right: 0px;
    left: 0px;
`

const ActionButton = styled.button`
    transition: all .3s ease;
    margin-right: 30px;
    margin-left: 30px;
    cursor: pointer;
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 30px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    :hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }
`;

function EventsSelectionCarousel(props) {
    const { items, goHome } = props
    const carouselRef = useRef(null)


    function prevEvent() {
        carouselRef.current.slidePrev()
    }

    function nextEvent() {
        carouselRef.current.slideNext()
    }



    return (
        <>
            <CenterContainer>
                <Carousel itemsToShow={1} itemPadding={[300, 30, 300, 30]} transitionMs={700} pagination={false} showArrows={false} ref={carouselRef} enableSwipe={false} enableMouseSwipe={false}>
                    {items.map((item, index) => {
                        return (
                            <EventCard item={item} />
                        )
                    })}
                </Carousel>
            </CenterContainer>
            <ButtonContainer >
                <ActionButton onClick={() => { prevEvent() }}>
                    <IoMdArrowRoundBack style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '45px', }} />
                </ActionButton>
                <ActionButton onClick={() => { goHome() }}>
                    <AiOutlineHome style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '40px', }} />
                </ActionButton>
                <ActionButton onClick={() => { nextEvent() }}>
                    <IoMdArrowRoundForward style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '45px', }} />
                </ActionButton>
            </ButtonContainer>
        </>
    )
}

export default EventsSelectionCarousel