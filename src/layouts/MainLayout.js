import React from 'react'
import styled from 'styled-components'
import Background from '../static/img/background.png';

const BackgroundContainer = styled.div`
    display: flex;
    background: black;
    background-image: url(${Background});
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
`

function MainLayout(props) {
    return (
        <BackgroundContainer>
            {props.children}
        </BackgroundContainer>
    )
}

export default MainLayout