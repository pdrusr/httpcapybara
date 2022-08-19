import React from "react"

import Title from "./components/Title"
import Main from "./components/Main"
import Capybara from "./components/Capybara"

import Database from "./datas/Database"

export default function App() {

    return <>
        <Title text="HTTP CAPYBARA"/>
        <Main>
            {
                Database.map(function(data) {
                    return <Capybara 
                        key={ data.code }
                        image={ data.image }
                        code={ data.code + " " + data.message }
                    />
                })
            }
        </Main>
    </>
}