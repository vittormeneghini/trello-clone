import React from 'react'
import styled from 'styled-components'

const StyledLI = styled.li`
    display: flex;
    background-color: white;
    width: 100%;
    padding: 5px;
    align-items: center;
    height: 20px;
    margin: 10%; 
    color: ${props => props.selected ? '#0079bf' : '#3D3C4D'};
    background-color: ${props => props.selected ? '#E4F0F6' : 'white'};
    border-radius: 5px;
`

const LIText = styled.p`
    font-weight: 600;
    font-size: 13px;
    width: 85%;
    margin-left: 15px;
    display: ${props => props.new ? 'inline-block' : ''};
`
const NewLabel = styled.label`
    background-color: #61BD4F;
    color: white;
    font-size: 10px;
    border-radius: 5px;
    margin-left: 5px;
    padding: 5px;
`

const Item = (props) => {

    return (
        <StyledLI selected={props.selected}>
            <i className={props.icon}></i>
            <LIText new={props.new}>
                {props.text}  
                {props.new && <NewLabel>Novo</NewLabel>}              
            </LIText>
        </StyledLI>
    )
}

export default Item