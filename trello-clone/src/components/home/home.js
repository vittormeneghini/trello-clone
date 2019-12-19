import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import List from './list'
import Board from './board'
import axios from 'axios'

const MainContent = styled.section`
  background-color: white;  
  grid-area: content;
  display: grid;
  grid-template-columns: 2fr 8fr;
  column-gap: 40px;
  grid-template-areas: "leftContent rightContent";
  padding: 10px 150px;
`

const LeftContent = styled.div`    
    grid-area: leftContent;    
`

const RightContent = styled.div`
    grid-area: rightContent;
    display: flex;
    flex-wrap: nowrap;
    max-width: 900px;
`

const Home = (props) => {

    const [boards, setBoards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/boards').then((response) => setBoards(response.data))     
    }, [])

    function onDeleteBoard(id){
        let newBoard = boards.filter((item) => {
            return item._id !== id;
        })

        setBoards(newBoard)
    }


    return (
        <MainContent>
            <LeftContent>
                <List></List>
            </LeftContent>
            <RightContent>
                {
                    boards.length > 0 && boards.map((item, i) => <Board key={i} board={item} onDelete={onDeleteBoard} />)
                }
            </RightContent>
        </MainContent>
    )
}

export default Home