import React from "react";
import styled from 'styled-components'
import Card from '../../components/Card';

const EVENTS_URL = process.env.REACT_APP_EVENTS_URL

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

const LoginTitleContainer = styled.div`
    max-width: 580px;
    min-width: 250px;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
`

const LoginTitle = styled.h1`
  font-size: 55px;
  color: rgba(56, 56, 56, 1);
  font-family: "HelveticaNeueBold";
`

const LoginButtonContainer = styled.div`
`
const LoginButton = styled.button`
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
const LoginButtonText = styled.h1`
    font-size: 18px;
    color: rgba(56, 56, 56, 1);
    font-family: "HelveticaNeueBold";
`


function LoginLayout(props) {
  const { show } = props
  return (
    <CenterContainer show={show}>
      <Card withBackground={true} width='700px' height='60vh'>
        <LoginTitleContainer>
          <LoginTitle>
            ¡Conecta con tu cuenta de Spotify y déjanos ser tu acompañante perfecto!
          </LoginTitle>
        </LoginTitleContainer>
        <LoginButtonContainer>
          <a href={`${EVENTS_URL}/login`}>
            <LoginButton>
              <LoginButtonText>
                Conecta con Spotify
              </LoginButtonText>
            </LoginButton>
          </a>
        </LoginButtonContainer>
      </Card>
    </CenterContainer>


  )
}

export default LoginLayout
