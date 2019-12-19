import React from 'react'
import Item  from './item'
import styled from 'styled-components'


const StyledUL = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    height: 100%;
    li{
        &:hover{            
            background-color: rgba(189, 195, 199,0.4);
            font-weight: bold;        
        }
    }
`

const List = (props) => {
    return(
        <StyledUL>
            <Item text="Quadros" icon="fa fa-home" selected={true} />
            <Item text="Modelos" icon="fa fa-home" new={true} />
            <Item text="Modelos" icon="fa fa-home" new={true} />
        </StyledUL>
    )
}

export default List