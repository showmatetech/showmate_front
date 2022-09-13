import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import LogoLayout from '../layouts/login/LogoLayout';
import HomeLayout from '../layouts/login/HomeLayout';
import NavBar from '../components/NavBar';
import { FaArrowDown } from "react-icons/fa";


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
const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: ${props => (props.isOpen ? `200%;` : `10%;`)};
right: 00px;
left: 0px;
visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
animation: ${props => props.isOpen ? fadeOut : ''} 0.2s 0.7s;

-webkit-transition: bottom  1.3s ease-in, visibility 0.5s 0.3s;
-moz-transition: bottom  1.3s ease-in, visibility 0.5s 0.3s;
-ms-transition: bottom  1.3s ease-in, visibility 0.5s 0.3s;
-o-transition: bottom  1.3s ease-in, visibility 0.5s 0.3s;
transition: bottom  1.3s ease-in, visibility 0.5s 0.3s;

`
const ActionButton = styled.button`
transition: all .3s ease;
    margin: 3px;
    cursor: pointer;
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 30px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    :hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }
`;

function Home() {
    const [isOpenNavBar, setIsOpenNavBar] = useState(false)

    return (
        <MainLayout>
            <NavBar isOpen={isOpenNavBar} />
            <LogoLayout show={!isOpenNavBar} />
            <HomeLayout show={isOpenNavBar}  />

            <ButtonContainer isOpen={isOpenNavBar}>
                <ActionButton onClick={() => { setIsOpenNavBar(true) }}>
                    <FaArrowDown style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '40px', }} />
                </ActionButton>
            </ButtonContainer>
        </MainLayout>
    )
}

export default Home