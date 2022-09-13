import React from "react";
import styled, { keyframes} from 'styled-components'
import { DotWave } from '@uiball/loaders'


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
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 700px;
    height: 600px;

    background: ${props => (props.withBackground ? `rgba(255, 255, 255, 0.25);` : ``)}; 
    border-radius: ${props => (props.withBackground ? `0px;` : ``)};
    box-shadow: ${props => (props.withBackground ? `0 4px 18px rgba(0, 0, 0, 0.4);` : ``)};
    backdrop-filter: ${props => (props.withBackground ? `blur(20px);` : ``)};
    -webkit-backdrop-filter: ${props => (props.withBackground ? `blur(20px);` : ``)};
    border: ${props => (props.withBackground ? `1px solid rgba(255, 255, 255, 0.2);` : ``)};
`
const LoaderContainer = styled.div`
  padding: 20px;
`

function CenterCardUp(props) {
    const { loading, withBackground, show } = props
    return (
        <CenterContainer show={show}>
            {
                loading ?
                    <Card withBackground={withBackground}>
                        <LoaderContainer>
                            <DotWave
                                size={47}
                                speed={1}
                                color="rgba(56, 56, 56, 1)"
                            />
                        </LoaderContainer>
                    </Card>
                    :
                    <>
                        <Card withBackground={withBackground}>
                            {props.children}
                        </Card>
                    </>
            }
        </CenterContainer>
    )
}

export default CenterCardUp