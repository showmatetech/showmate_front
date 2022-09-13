import React from "react";
import styled from 'styled-components'
import HorizontalCard from './HorizontalCard';
import AudioPlayer from 'react-modular-audio-player';

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

function EventCard(props) {
    const { item } = props
    return (
        <HorizontalCard withBackground={true}>
            <ImageContainer>
                <Image src={item.image} />
            </ImageContainer>
            <InfoContainer>
                <InfoTitle>
                    {item.title}
                </InfoTitle>
                <InfoSubTitle>
                    Artist: {item.artist}
                </InfoSubTitle>
                <InfoSubTitle>
                    Location: {item.location}
                </InfoSubTitle>
                <InfoSubTitle>
                    Date: {item.date}
                </InfoSubTitle>
                <InfoSubTitle>
                    Venue: {item.venue}
                </InfoSubTitle>
                <InfoSubTitle>
                    Type: {item.type}
                </InfoSubTitle>
                {item.trackUrl ?
                    <AudioPlayer
                        rearrange={rearrangedPlayer}
                        audioFiles={[{ src: item.trackUrl }]}
                        playerWidth="10em"
                        fontSize="1.5rem"
                        iconSize="1.5rem"
                    />
                    : <></>
                }
            </InfoContainer>
        </HorizontalCard>
    )
}

export default EventCard