
import React from 'react'
import styled from 'styled-components'

export default function Button({children, onClick}) {
  return (
    <ButtonCool onClick={onClick}>
        {children}
    </ButtonCool>
  );
}


const ButtonCool = styled.div``;