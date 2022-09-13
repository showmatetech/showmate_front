import React from "react";
import styled from 'styled-components'
import HorizontalCard from './HorizontalCard';
import { Audio, Media } from '@vidstack/player-react';
import AudioPlayer from 'react-modular-audio-player';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`

const Image = styled.img`
    border-radius: 10%;
    margin-top: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    width: 75%;
    height: 75%;
    src: ${props => (props.src ? props.src : '')};
   
`

const InfoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
`
const InfoTitle = styled.h1`

    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 35px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerBold";
`;

const InfoSubTitle = styled.h1`

    margin-bottom: 10px;
    margin-top: 2px;
    font-size: 20px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerLight";
`;

const InfoSong = styled.h1`

    margin-bottom: 2px;
    margin-top: 2px;
    font-size: 20px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerRegular";
`;

let rearrangedPlayer = [
    {
        className: "tier-top",
        style: {
            width: '100%',
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            padding: '0.5rem',
            borderRadius: '15px',
            '-webkit-backdrop-filter': 'blur(15px)',
            'backdrop-filter': 'blur(15px)'
        },
        innerComponents: [
            {
                type: "play",
                style: {
                    width: "fit-content",
                    color: 'rgba(56, 56, 56, 1)'
                }
            },
            {
                type: "time",
                style: {
                    width: "fit-content",
                    fontFamily: "BlinkerSemiLight",
                    fontSize: '20px',
                    color: 'rgba(56, 56, 56, 1)'
                }
            },
            {
                type: "seek",
                style: {
                    color: 'rgba(56, 56, 56, 1)'
                }
            },
        ]
    }
]


function ArtistCard(props) {
    const { item } = props

    return (
        <HorizontalCard withBackground={true} width='400px' height='600px'>
            <Container>
                <Image src={item.images ? item.images[0].url : 'https://i0.wp.com/www.un.org/pga/73/wp-content/uploads/sites/53/2018/09/Dummy-image-1.jpg?ssl=1'} />
                <InfoContainer>
                    <InfoTitle>
                        {item.name ? item.name : '---'}
                    </InfoTitle>

                    <InfoSong>
                        {item.topTrack.name ? item.topTrack.name : '---'}
                    </InfoSong>

                    <InfoSubTitle>
                        (Last top song)
                    </InfoSubTitle>

                </InfoContainer>
                {item.topTrack.preview_url ?
                    <AudioPlayer
                        rearrange={rearrangedPlayer}
                        audioFiles={[{ src: item.topTrack.preview_url }]}
                        playerWidth="10em"
                        fontSize="1.5rem"
                        iconSize="1.5rem"
                    />
                    : <></>
                }
            </Container>
        </HorizontalCard>
    )
}

export default ArtistCard