import React, {useRef} from "react";
import styled, { keyframes } from 'styled-components'
import { DotWave } from '@uiball/loaders'
import Carousel from 'react-elastic-carousel'
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

    -webkit-transition: all  0.9s 0.4s ease;
    -moz-transition: all  0.9s 0.4s ease; 
    -ms-transition: all  0.9s 0.4s ease; 
    -o-transition: all  0.9s 0.4s ease; 
    transition: all  0.9s 0.4s ease; 
`
const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 875px;
    height: 475px;

    background: ${props => (props.withBackground ? `rgba(255, 255, 255, 0.25);` : ``)}; 
    border-radius: ${props => (props.withBackground ? `30px;` : ``)};
    box-shadow: ${props => (props.withBackground ? `0 4px 18px rgba(0, 0, 0, 0.4);` : ``)};
    backdrop-filter: ${props => (props.withBackground ? `blur(20px);` : ``)};
    -webkit-backdrop-filter: ${props => (props.withBackground ? `blur(20px);` : ``)};
    border: ${props => (props.withBackground ? `1px solid rgba(255, 255, 255, 0.2);` : ``)};
`


const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom:  15%;
right: 00px;
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


function CenterCardEvent(props) {
    const { withBackground, show } = props
    const carouselRef = useRef(null)

    function discardEvent() {
        carouselRef.current.slideNext()
    }

    function saveEvent() {
        console.log(carouselRef.current)
        carouselRef.current.slideNext()
    }

    return (
        <>
            <CenterContainer show={show}>
                <Carousel itemsToShow={1} itemPadding={[300, 30, 300, 30]} transitionMs={700} pagination={false} showArrows={false} ref={carouselRef} enableSwipe={false} enableMouseSwipe={false}>
                    <Card withBackground={withBackground}>
                        <ImageContainer>
                            <Image src="https://i.scdn.co/image/ab6761610000e5eb391ee1027796dc018f25ec35" />
                        </ImageContainer>
                        <InfoContainer>
                            <InfoTitle>
                                BANKS at Paradiso (September 11, 2022)
                            </InfoTitle>
                            <InfoSubTitle>
                                Artist: BANKS
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Location: Amsterdam, Netherlands
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Date: 2022-09-11
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Venue: Paradiso
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Type: Concert
                            </InfoSubTitle>
                        </InfoContainer>
                        {props.children}
                    </Card>
                    <Card withBackground={withBackground}>
                        <ImageContainer>
                            <Image src="https://i.scdn.co/image/ab6761610000e5eb391ee1027796dc018f25ec35" />
                        </ImageContainer>
                        <InfoContainer>
                            <InfoTitle>
                                BANKS at Paradiso (September 11, 2022)
                            </InfoTitle>
                            <InfoSubTitle>
                                Artist: BANKS
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Location: Amsterdam, Netherlands
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Date: 2022-09-11
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Venue: Paradiso
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Type: Concert
                            </InfoSubTitle>
                        </InfoContainer>
                        {props.children}
                    </Card>
                    <Card withBackground={withBackground}>
                        <ImageContainer>
                            <Image src="https://i.scdn.co/image/ab6761610000e5eb391ee1027796dc018f25ec35" />
                        </ImageContainer>
                        <InfoContainer>
                            <InfoTitle>
                                BANKS at Paradiso (September 11, 2022)
                            </InfoTitle>
                            <InfoSubTitle>
                                Artist: BANKS
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Location: Amsterdam, Netherlands
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Date: 2022-09-11
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Venue: Paradiso
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Type: Concert
                            </InfoSubTitle>
                        </InfoContainer>
                        {props.children}
                    </Card>

                    <Card withBackground={withBackground}>
                        <ImageContainer>
                            <Image src="https://i.scdn.co/image/ab6761610000e5ebc8d3d98a1bccbe71393dbfbf" />
                        </ImageContainer>
                        <InfoContainer>
                            <InfoTitle>
                                Lady Gaga at Wrigley Field (August 15, 2022)
                            </InfoTitle>
                            <InfoSubTitle>
                                Artist: Lady Gaga
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Location: Chicago, IL, US
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Date: 2022-08-15
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Venue: Wrigley Field
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Type: Concert
                            </InfoSubTitle>
                        </InfoContainer>
                        {props.children}
                    </Card>

                    <Card withBackground={withBackground}>
                        <ImageContainer>
                            <Image src="https://i.scdn.co/image/ab6761610000e5ebd42a27db3286b58553da8858" />
                        </ImageContainer>
                        <InfoContainer>
                            <InfoTitle>
                                Dua Lipa at Parque Salitre Mágico (September 18, 2022)
                            </InfoTitle>
                            <InfoSubTitle>
                                Artist: Dua Lipa
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Location: Bogota, Colombia
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Date: 2022-09-18
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Venue: Parque Salitre Mágico
                            </InfoSubTitle>
                            <InfoSubTitle>
                                Type: Concert
                            </InfoSubTitle>
                        </InfoContainer>
                        {props.children}
                    </Card>
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

export default CenterCardEvent