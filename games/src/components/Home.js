

import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <HomeMainContainer>
        <HomeTitleContainer>
            <h2 className="gameHeader">Home</h2>
        </HomeTitleContainer>
        <HomeBodyContainer>
            <ParagraphOne>
                ParagraphOne
            </ParagraphOne>
            <ParagraphTwo>
                paragraph two
            </ParagraphTwo>
        </HomeBodyContainer>
    </HomeMainContainer>
    
  )
}


const HomeMainContainer = styled.div`


`

const HomeTitleContainer = styled.div`
    h2{
        color: white;
        text-align:center;
    }

`

const HomeBodyContainer = styled.div`
    background-color: white;


`
const ParagraphOne = styled.div`

`
const ParagraphTwo = styled.div`

`
