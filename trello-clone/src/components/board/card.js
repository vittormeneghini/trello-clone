import React, { useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
    background-color: white;
    border-radius: 2px;
    display: grid;
    grid-template-rows: 5vh 10h;
    width: 100%;
    padding: 1px 10px;
    margin-top: 3%;
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    i{
        color: grey;
        font-size: 0.8em;
    }
    p{
        font-size: 0.8em;
        margin-left: 2px;
    }
`

const Message = styled.div`
    height: auto;
    width: 100%;
    font-weight: 300;
    font-size: 1.0em;
    padding: 2px;
`

const Card = (props) => {
    
    const [card, setCard] = useState(props.card)

    return (
        <Main>
            <Message>{card.title}</Message>
            <Footer>
                <i className="fa fa-phone"></i>
                <p>2</p>
            </Footer>
        </Main>
    )
}

export default Card