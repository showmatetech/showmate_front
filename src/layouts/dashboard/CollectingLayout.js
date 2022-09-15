import React from "react";
import styled from 'styled-components'
import { Waveform } from '@uiball/loaders'
import Card from '../../components/Card';

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

function CollectingLayout(props) {
    const { email } = props
    return (
        <CenterContainer show={true}>
            <Card loading={false} withBackground={true} width='700px' height='600px'>
                <TextContainer>
                    <Title>
                    Our system is looking for the best events for you
                    </Title>
                    <SubTitle>
                    Este proceso puede tardar. Te enviaremos un correo electrónico a {email} cuando nuestra AI haya terminado.
                    </SubTitle>
                </TextContainer>
                <LoaderContainer>
                    <Waveform
                        size={50}
                        lineWeight={3.5}
                        speed={1}
                        color="rgba(56, 56, 56, 1)"
                    />
                </LoaderContainer>
            </Card>
        </CenterContainer>
    )
}

export default CollectingLayout