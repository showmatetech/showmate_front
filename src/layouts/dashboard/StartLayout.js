import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Card from '../../components/Card';
import MapLayout from './MapLayout';
import ArtistsCarouselLayout from './ArtistsCarouselLayout';
import { startAI, setUserSelection, getEventsStatusURL } from '../../services/server/server'


const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${props => (props.show ? `50%` : `200%`)};
    bottom: ${props => (props.show ? `50%` : '0%')};
    right: 10%;
    left: 10%;

    -webkit-transition: all  0.9s 0.4s ease;
    -moz-transition: all  0.9s 0.4s ease; 
    -ms-transition: all  0.9s 0.4s ease; 
    -o-transition: all  0.9s 0.4s ease; 
    transition: all  0.9s 0.4s ease; 
`
const TextContainer = styled.div`
    max-width: 500px;
    min-width: 250px;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20px;
`
const Title = styled.h1`
    font-size: 55px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerBold";
`;

const StartButton = styled.button`
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
  font-size: 30px;
  color: rgba(56, 56, 56, 1);
  font-family: "BlinkerBold";
  margin-top: 16px;
`

function StartLayout(props) {
    const { userInfo } = props
    const [loading, setLoading] = useState(false)
    const [showCard, setShowCard] = useState(true)
    

    async function startFirstPhase(latLong) {
        setLoading(true)
        await startAI(latLong)
    }

    async function saveUserSelection(userSelectionObject) {
        setLoading(true)
        setShowCard(true)
        await setUserSelection(userSelectionObject)
    }

    return (
        showCard
            ?
            <CenterContainer show={true}>
                <Card loading={loading} withBackground={true} width='700px' height='600px'>
                    <TextContainer>
                        <Title>
                            Click to start the magic
                        </Title>
                    </TextContainer>

                    <StartButton onClick={() => { setShowCard(false) }}>
                        <ButtonText>
                            Start
                        </ButtonText>
                    </StartButton>
                </Card>
            </CenterContainer>
            :
            (!userInfo.artistsToAsk || userInfo.artistsToAsk.length === 0)
                ?
                <MapLayout loading={loading} withBackground={true} startFirstPhase={startFirstPhase} />
                :
                <ArtistsCarouselLayout items={userInfo.artistsToAsk} saveUserSelection={saveUserSelection} />
    )
}

export default StartLayout