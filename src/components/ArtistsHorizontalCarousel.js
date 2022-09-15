import React, { useRef, useState, useEffect } from "react";
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import ArtistCard from './ArtistCard';
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

const ImageContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-left: 20px;
    margin-right: 5px;
`

const Image = styled.img`
    border-radius: 10%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    width: 80%;
    src: ${props => (props.src ? props.src : '')};
`

const InfoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    margin-left: 5px;
    margin-right: 20px;
`
const InfoTitle = styled.h1`
    width: 90%;
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 35px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerBold";
`;

const InfoSubTitle = styled.h1`
    width: 90%;
    margin-bottom: 2px;
    margin-top: 2px;
    font-size: 20px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerLight";
`;

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

function ArtistsHorizontalCarousel(props) {
    const SLICE = 15
    const { items, saveUserSelection } = props
    const carouselRef = useRef(null)
    const [itemIndex, setItemIndex] = useState(0)
    const [likedItems, setLikedItems] = useState([])
    const [discardedItems, setDiscardedItems] = useState([])

    function checkSlice() {
        if (itemIndex >= (SLICE - 1) && discardedItems.length >= 5) { //TODO añadir condición a los elegidos tb
            saveUserSelection({likedItems, discardedItems})
            return true
        }
        return false
    }

    function discardEvent() {
        console.log({itemIndex, likedItems, discardedItems})
        if (!checkSlice()) {
            const discardedItemsAux = discardedItems
            discardedItemsAux.push(items[itemIndex])
            setDiscardedItems(discardedItemsAux)
            setItemIndex(itemIndex + 1)
            carouselRef.current.slideNext()
        }
    }

    function saveEvent() {
        console.log({itemIndex, likedItems, discardedItems})
        if (!checkSlice()) {
            const likedItemsAux = likedItems
            likedItemsAux.push(items[itemIndex])
            setLikedItems(likedItemsAux)
            setItemIndex(itemIndex + 1)
            carouselRef.current.slideNext()
        }
    }

    return (
        <>
            <CenterContainer>
                <Carousel itemsToShow={1} itemPadding={[300, 30, 300, 30]} transitionMs={700} pagination={false} showArrows={false} ref={carouselRef} enableSwipe={false} enableMouseSwipe={false}>
                    {items.map((item, index) => {
                        if (item && item !== null){
                            return (
                                <ArtistCard item={item} />
                            )
                        }
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

export default ArtistsHorizontalCarousel