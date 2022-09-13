import React from "react";
import styled, { keyframes } from 'styled-components'
import { DotWave } from '@uiball/loaders'
import smallLogo from '../static/img/LOGONOBGNOMOT.png';


const fadeIn = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    right: 0px;
    left: 0px;
    height: 100%;
    max-height: ${props => (props.isOpen ? `50px;` : `0px;`)};

    -webkit-transition: max-height  0.5s 0.5s; 
    -moz-transition: max-height  0.5s 0.5s; 
    -ms-transition: max-height  0.5s 0.5s; 
    -o-transition: max-height  0.5s 0.5s;  
    transition: max-height  0.5s 0.5s; 
    z-index: 100;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 0px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
`
const LoaderContainer = styled.div`
  padding: 20px;
`
const LogoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
animation: ${props => props.isOpen ? fadeIn : ''} 0.5s 0.6s;

-webkit-transition:  visibility 1s 0.6s;
-moz-transition:  visibility 1s 0.6s;
-ms-transition:  visibility 1s 0.6s;
-o-transition: visibility 1s 0.6s;
transition:  visibility 1s 0.6s;
`


const Image = styled.img`
width: 120px;
src: ${props => (props.src ? props.src : '')};
`

function NavBar(props) {
    const { loading, isOpen } = props
    return (
        <NavContainer isOpen={isOpen}>
            {
                loading ?
                    <Card>
                        <LoaderContainer>
                            <DotWave
                                size={47}
                                speed={1}
                                color="white"
                            />
                        </LoaderContainer>
                    </Card>
                    :
                    <>
                        <Card>
                            <LogoContainer isOpen={isOpen}>
                                <Image src={smallLogo} />
                            </LogoContainer>
                        </Card>
                    </>
            }
        </NavContainer>
    )
}

export default NavBar