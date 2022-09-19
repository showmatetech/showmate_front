import React, { useState } from "react";
import styled from 'styled-components'
import Card from '../../components/Card';
import { createUser } from '../../services/server/server'

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

const HomeTitleContainer = styled.div`
    max-width: 500px;
    min-width: 250px;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
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

const HomeButtonContainer = styled.div`
`
const HomeButton = styled.button`
  flex-direction: column;
  align-items: center;
  justify-content: center;
    transition: all .3s ease;
    cursor: pointer;
    width: 150px;
    height: 50px;
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
const HomeButtonText = styled.h1`
  font-size: 20px;
  color: rgba(56, 56, 56, 1);
  font-family: "HelveticaNeueBold";
  margin-top: 16px;
`

const HomeInput = styled.input`
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 15px;

    font-size: 20px;
    color: rgba(56, 56, 56, 1);
    font-family: "BlinkerRegular";

    width: 38%;
    height: 40px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
`

function HomeLayout(props) {
  const { show } = props
  const [email, setEmail] = useState('')

  function update(event) {
    setEmail(event.target.value)
  }

  function sendEmail() {
    const fetchData = async () => {
      console.log(email)
      const result = await createUser(email)
    }
    fetchData()
  }

  return (
    <CenterContainer show={show}>
      <Card withBackground={true} width='700px' height='60vh'>
        <HomeTitleContainer>
          <Title>
            ¡Showmate está todavía en beta!
          </Title>
          <SubTitle>
            Si quieres formar parte del programa beta, introduce a continuación el email asociado a tu cuenta de Spotify. Te enviaremos un email cuando estés dentro del programa.
          </SubTitle>
        </HomeTitleContainer>

        <HomeInput type="text" value={email} onChange={update} placeholder="email"/>

        <HomeButtonContainer>
          <HomeButton onClick={sendEmail}>
            <HomeButtonText>
              Enviar
            </HomeButtonText>
          </HomeButton>
        </HomeButtonContainer>

      </Card>
    </CenterContainer>


  )
}

export default HomeLayout
