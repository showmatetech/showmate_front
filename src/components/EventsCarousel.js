import React, { useRef, useState } from "react";
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import EventCard from './EventCard';
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 46%;
    bottom: 54%;
    right: 5%;
    left: 5%;
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

function EventsCarousel(props) {
    const { items, saveUserSelection } = props
    const carouselRef = useRef(null)
    const [itemIndex, setItemIndex] = useState(0)
    const [likedItems, setLikedItems] = useState([])
    const [discardedItems, setDiscardedItems] = useState([])

    function checkFinish() {
        if (items.length === itemIndex) {
            saveUserSelection({ likedItems, discardedItems })
            return true
        }
        return false
    }

    function discardEvent() {
        console.log({ itemIndex, likedItems, discardedItems })
        const discardedItemsAux = discardedItems
        discardedItemsAux.push(items[itemIndex])
        setDiscardedItems(discardedItemsAux)
        setItemIndex(itemIndex + 1)
        if (!checkFinish()) {
            carouselRef.current.slideNext()
        }
    }

    function saveEvent() {
        console.log({ itemIndex, likedItems, discardedItems })
        const likedItemsAux = likedItems
        likedItemsAux.push(items[itemIndex])
        setLikedItems(likedItemsAux)
        setItemIndex(itemIndex + 1)
        if (!checkFinish()) {
            carouselRef.current.slideNext()
        }
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
                <ActionButton onClick={() => { saveEvent() }}>
                    <ImCheckmark style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '40px', }} />
                </ActionButton>
                <ActionButton onClick={() => { discardEvent() }}>
                    <ImCross style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '32px', }} />
                </ActionButton>
            </ButtonContainer>
        </>
    )
}

export default EventsCarousel