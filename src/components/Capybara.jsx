import React from "react"
import styled from "styled-components"

const ModelCapybara = styled.div`
    background: #57504d;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
`

const CapybaraImage = styled.img`
    height: 250px;
    width: 250px;
`

const CapybaraText = styled.div`
    padding: 8px 0;
    text-align: center;
    width: 250px;
    word-break: break-all;
`

export default function Capybara(props) {

    return <ModelCapybara>

        <CapybaraImage src={ props.image } alt="Capybara Picture"/>

        <CapybaraText> { props.code } </CapybaraText>

    </ModelCapybara>
}