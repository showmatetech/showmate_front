import React from "react";
import styled, { keyframes } from 'styled-components'
import Card from '../../components/Card';
import fullLogo from '../../static/img/LOGONOBG.png';

const fadeOut = keyframes`
from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.7);
    opacity: 0;
  }
`

const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${props => (props.show ? `47%;` : `0%;`)};
    bottom: ${props => (props.show ? `53%;` : `100%;`)};
    right: 5%;
    left: 5%;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    animation: ${props => props.show ? '' : fadeOut} 0.4s 0.5s;

    -webkit-transition: top 0.6s ease-in, bottom 0.6s ease-in, visibility 0.8s;
    -moz-transition: top 0.6s ease-in, bottom 0.6s ease-in, visibility 0.8s;
    -ms-transition: top 0.6s ease-in, bottom 0.6s ease-in, visibility 0.8s; 
    -o-transition: top 0.6s ease-in, bottom 0.6s ease-in, visibility 0.8s;
    transition: top 0.6s ease-in, bottom 0.6s ease-in, visibility 0.8s;
`

const LogoContainer = styled.div`
  justify-content: center;
`

const Image = styled.img`
  width: 90%;
  src: ${props => (props.src ? props.src : '')};
`


function LogoLayout(props) {
  const { show } = props
  return (
    <CenterContainer show={show}>
      <Card withBackground={false} width='900px' height='600px'>
        <LogoContainer>
          <Image src={fullLogo} />
        </LogoContainer>
      </Card>

    </CenterContainer>
  )
}

export default LogoLayout