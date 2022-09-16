import React, { useState } from "react";
import styled from 'styled-components'
import Card from '../../components/Card';
import ArtistsCarouselLayout from './ArtistsCarouselLayout';
import { Waveform } from '@uiball/loaders'
import { setUserSelection } from '../../services/server/server'


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

const SubTitle = styled.h1`
    font-size: 16px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerRegular";
`;

const LoaderContainer = styled.div`
  padding: 10px;
`

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

function ArtistSelectionLayout(props) {
    const { userInfo } = props
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('Selecciona si te gustan o no estos artistas')
    const [subtitle, setSubtitle] = useState('Puedes escuchar 30 segundos de la canción más relevante actualmente de cada uno de ellos')
    const [showCarousel, setShowCarousel] = useState(false)


    async function startArtistsSelection() {
        setShowCarousel(true)
    }

    async function saveUserSelection(userSelectionObject) {
        setShowCarousel(false)
        setLoading(true)
        setTitle('Estamos procesando tus respuestas')
        setSubtitle('')
        await setUserSelection(userSelectionObject)
    }


    if (showCarousel) {
        return (
            <ArtistsCarouselLayout items={userInfo.artistsToAsk} saveUserSelection={saveUserSelection} />
        )
    }
    else {
        return (
            <CenterContainer show={true}>
                <Card withBackground={true} width='700px' height='600px'>
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
                        <StartButton onClick={() => { startArtistsSelection() }}>
                            <ButtonText>
                                Start
                            </ButtonText>
                        </StartButton>
                    }
                </Card>
            </CenterContainer>
        )
    }
}

export default ArtistSelectionLayout