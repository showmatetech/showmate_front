import React, { useState } from "react";
import styled from 'styled-components'
import Card from '../../components/Card';
import EventsCarousel from '../../components/EventsCarousel';
import { setEventsUserSelection } from '../../services/server/server'
import { Waveform } from '@uiball/loaders'


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
    max-width: 500px;
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

const SubTitle = styled.h1`
    font-size: 16px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerRegular";
`;

const StartButton = styled.button`
margin-bottom: 10%;
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
  font-size: 25px;
  color: rgba(56, 56, 56, 1);
  font-family: "HelveticaNeueBold";
  margin-top: 16px;
`
const LoaderContainer = styled.div`
  padding: 10px;
`

function FinishLayout(props) {
    const { userInfo, eventsParsed } = props
    const [loading, setLoading] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [title, setTitle] = useState('El show está a punto de comenzar')
    const [subtitle, setSubtitle] = useState('Ya estamos listos. A continuación, puedes elegir si te interesan o no las experiencias que hemos encontrado para ti. Después, podrás acceder al listado completo siempre que quieras.')


    async function saveUserSelection(userSelectionObject) {
        setShowResults(false)
        setLoading(true)
        setTitle('Estamos procesando tu selección')
        setSubtitle('')
        await setEventsUserSelection(userSelectionObject)
    }

    if (showResults) {
        return (
            <EventsCarousel items={eventsParsed} saveUserSelection={saveUserSelection} />
        )
    }
    else {
        return (
            <CenterContainer show={true}>
                <Card withBackground={true} width='700px' height='60vh'>
                    <TextContainer>
                        <Title>
                            {title}
                        </Title>
                        <SubTitle>
                            {subtitle}
                        </SubTitle>
                    </TextContainer>

                    {loading
                        ?
                        <LoaderContainer>
                            <Waveform
                                size={50}
                                lineWeight={3.5}
                                speed={1}
                                color="rgba(56, 56, 56, 1)"
                            />
                        </LoaderContainer>
                        :
                        <StartButton onClick={() => { setShowResults(true) }}>
                            <ButtonText>
                                It’s show time!
                            </ButtonText>
                        </StartButton>
                    }
                </Card>
            </CenterContainer>
        )
    }
}

export default FinishLayout