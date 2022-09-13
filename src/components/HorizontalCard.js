import styled from 'styled-components'
import { DotWave } from '@uiball/loaders'

const CardComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: ${props => (props.width ? props.width : `875px`)};
    height: ${props => (props.width ? props.height : `475px`)};

    background: ${props => (props.withBackground ? `rgba(255, 255, 255, 0.25);` : ``)}; 
    border-radius: ${props => (props.withBackground ? `15px;` : ``)};
    box-shadow: ${props => (props.withBackground ? `0 4px 18px rgba(0, 0, 0, 0.4);` : ``)};
    backdrop-filter: ${props => (props.withBackground ? `blur(20px);` : ``)};
    -webkit-backdrop-filter: ${props => (props.withBackground ? `blur(20px);` : ``)};
    border: ${props => (props.withBackground ? `1px solid rgba(255, 255, 255, 0.2);` : ``)};
`
const LoaderContainer = styled.div`
  padding: 20px;
`


function HorizontalCard(props) {
    const { loading, withBackground, width, height } = props
    return (

        <CardComponent withBackground={withBackground} width={width} height={height}>
            {
                loading ?
                    <LoaderContainer>
                        <DotWave
                            size={47}
                            speed={1}
                            color="rgba(56, 56, 56, 1)"
                        />
                    </LoaderContainer>
                    :
                    props.children
            }
        </CardComponent>

    )
}

export default HorizontalCard