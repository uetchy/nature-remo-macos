import React from 'react'
import styled from 'styled-components'

const BarIndicator = props => {
  return (
    <Container {...props}>
      <Handle {...props} />
    </Container>
  )
}

const gradientTheme = {
  warm: 'linear-gradient(#F76B1C, #FAD961)',
  cold: 'linear-gradient(#80C3F3, #4A90E2)',
}

const Handle = styled.div`
  width: 100px;
  height: 8px;
  background: ${props =>
    props.isModifying ? 'rgb(255,255,255,1.0)' : 'rgb(255,255,255,0.3)'};
  border-radius: 4px;
  margin-top: 8px;
  transition: all 0.5s;
`

const Container = styled.div`
  position: absolute
  width: 100%
  height: ${props => 100 * (props.value / props.maxValue)}%;
  opacity: ${props => (props.isModifying ? '0.8' : '1.0')};
  top: ${props => 100 - 100 * (props.value / props.maxValue)}%;
  background: ${props => gradientTheme[props.mode]};
  display: flex;
  justify-content: center;
  border-top-left-radius: ${props => (props.isModifying ? '20px' : '0')};
  border-top-right-radius: ${props => (props.isModifying ? '20px' : '0')};
  transition: all ${props => (props.isModifying ? '0.2' : '0.8')}s;
`

export default BarIndicator
