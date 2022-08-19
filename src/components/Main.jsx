import React from "react"
import styled from "styled-components"

const ModelMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 32px 0;
`

export default function Main(props) {

    return <ModelMain> 

        { props.children } 
        
    </ModelMain>
}