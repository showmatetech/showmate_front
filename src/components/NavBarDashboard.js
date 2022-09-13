import React from "react";
import styled from 'styled-components'
import { DotWave } from '@uiball/loaders'
import { MdOutlineExitToApp } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import { logout, refreshToken } from '../services/spotify/spotify';
import smallLogo from '../static/img/LOGONOBGNOMOT.png';

const NavContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0%;
    right: 0px;
    left: 0px;
    height: 100%;
    max-height: 49px;
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
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`


const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: right;
    position: absolute;
    top: 5px;
    right: 30px;
    bottom: 0;
    left: 0;
`

const ActionButton = styled.button`
    margin-left: 5px;
    cursor: pointer;
    background: transparent;
    border: 0;
`;

const Image = styled.img`
width: 120px;
src: ${props => (props.src ? props.src : '')};
`


function NavBarDashboard(props) {
    const { loading, isOpen } = props
    return (
        <NavContainer isOpen={isOpen}>
            <Card>
                <LogoContainer isOpen={isOpen}>
                    <Image src={smallLogo} />
                </LogoContainer>
                <ActionsContainer>
                    <ActionButton onClick={refreshToken}>
                        <HiRefresh style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '25px', }} />
                    </ActionButton>
                    <ActionButton onClick={logout}>
                        <MdOutlineExitToApp style={{ color: 'rgba(38, 38, 38, 1)', fontSize: '25px', }} />
                    </ActionButton>
                </ActionsContainer>
            </Card>
        </NavContainer>
    )
}

export default NavBarDashboard