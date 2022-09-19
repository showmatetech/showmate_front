import React, { useState } from "react";
import styled from 'styled-components'
import Card from '../../components/Card';
import EventsSelectionCarousel from '../../components/EventsSelectionCarousel';


const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${props => (props.show ? `53%` : `200%`)};
    bottom: ${props => (props.show ? `47%` : '0%')};
    right: 10%;
    left: 10%;

    -webkit-transition: all  0.9s 0.4s ease;
    -moz-transition: all  0.9s 0.4s ease; 
    -ms-transition: all  0.9s 0.4s ease; 
    -o-transition: all  0.9s 0.4s ease; 
    transition: all  0.9s 0.4s ease; 
`
const TextContainer = styled.div`
    max-width: 700px;
    min-width: 250px;
    margin-bottom: 5%;
    margin-left: 10%;
    margin-right: 10%;
`
const Title = styled.h1`
    font-size: 55px;
    color: rgba(56, 56, 56, 1);
    font-family: "HelveticaNeueBold";
`;

const StartButton = styled.button`
margin-bottom: 5%;
flex-direction: column;
align-items: center;
justify-content: center;
    transition: all .3s ease;
    cursor: pointer;
    width: 200px;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    :hover {
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    }
`
const ButtonText = styled.h1`
  font-size: 22px;
  color: rgba(56, 56, 56, 1);
  font-family: "HelveticaNeueBold";
  margin-top: 16px;
`

function EventsSelectionLayout(props) {
    const { userInfo, likedItems, discardedItems } = props
    const [eventsSeleccion, setEventsSeleccion] = useState(false)

    function goHome() {
        setEventsSeleccion(false)
    }

    if (eventsSeleccion) {
        console.log(eventsSeleccion)
        return (
            <EventsSelectionCarousel items={eventsSeleccion} goHome={goHome} />
        )
    }
    else {
        return (
            <CenterContainer show={true}>
                <Card withBackground={true} width='700px' height='60vh'>
                    <TextContainer>
                        <Title>
                            Explora tus elecciones y ¡a disfrutar!
                        </Title>
                    </TextContainer>

                    <StartButton onClick={() => { setEventsSeleccion(likedItems) }}>
                        <ButtonText>
                            Me interesan
                        </ButtonText>
                    </StartButton>

                    <StartButton onClick={() => { setEventsSeleccion(discardedItems) }}>
                        <ButtonText>
                            No me interesan
                        </ButtonText>
                    </StartButton>
                </Card>
            </CenterContainer>
        )
    }
}

export default EventsSelectionLayout