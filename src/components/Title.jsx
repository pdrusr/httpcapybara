import React from "react"
import styled from "styled-components"

const ModelTitle = styled.div`
    padding: 32px 0;
    text-align: center;
`

const TitleInner = styled.div`
    font-size: 32pt;
`

export default function Title(props) {

    return <ModelTitle>

        <TitleInner>

            { props.text }

        </TitleInner>
        
    </ModelTitle>
}