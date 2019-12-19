import React from 'react' 
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const NavBarContent = styled.nav`
  background-color: #026AA7;  
  grid-area: nav;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-areas: "leftContent centerContent rightContent";
  padding: 5px;
`

const LeftContent = styled.div`
  display: flex;
  grid-area: leftContent;
  width: 100%;
  height: 100%;
  align-items: center;
`

const CenterContent = styled.div`
  grid-area: centerContent;
  width: 100%;
  height: 100%;
`

const RightContent = styled.div`
  grid-area: rightContent;
  width: 100%;
  height: 100%;
`

const DivIcon = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #67A6CA;
  border: 1px solid #67A6CA;
  border-radius: 3px;
  i{
    color: white;
    font-size: 1.5em;
  }
  &:hover{
    cursor: pointer;
    background-color: #026AA7;
  }
`


const NavBar = (props) => {

  let history = useHistory()

  function handleClick(to){
    history.push(to)
  }
  
  return (
    <NavBarContent>
      <LeftContent>
        <DivIcon onClick={() => handleClick('/')}>
          <i className="fa fa-home" ></i>
        </DivIcon>
      </LeftContent>
      <CenterContent>

      </CenterContent>
      <RightContent>

      </RightContent>
    </NavBarContent>
  )
}

export default NavBar