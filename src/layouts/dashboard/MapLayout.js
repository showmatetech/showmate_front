import React, {useState} from "react";
import styled from 'styled-components'
import Card from '../../components/Card';
import SearchableMap from '../../components/SearchableMap';

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
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10px;
`
const Title = styled.h1`
    font-size: 32px;
    color: rgba(56, 56, 56, 1);
    font-family: "HelveticaNeueBold";
`;

const ButtonContainer = styled.div`
    margin-top: 30px;
`

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
  font-size: 30px;
  color: rgba(56, 56, 56, 1);
  font-family: "HelveticaNeueBold";
  margin-top: 16px;
`

function InformativeLayout(props) {
    const { loading, startFirstPhase } = props
    const [latLong, setLatLong] = useState({lat: 0, long: 0})
    return (
        <CenterContainer show={true}>
            <Card loading={loading} withBackground={true} width='700px' height='60vh'>
                <TextContainer>
                    <Title>
                        ¿Dónde quieres ir de concierto?
                    </Title>
                </TextContainer>
                    <SearchableMap setLatLong={setLatLong} />
                <ButtonContainer>
                    <StartButton onClick={()=>{startFirstPhase(latLong)}}>
                        <ButtonText>
                            Enviar
                        </ButtonText>
                    </StartButton>
                </ButtonContainer>
            </Card>
        </CenterContainer>
    )
}

export default InformativeLayout