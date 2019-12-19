import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Main = styled.div`
    border-radius: 4px;
    width: 200px;
    height: 100px;    
    margin-right: 2%;
    position: relative;
    background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/c48e502274322eb1bf5dfada1bbfeda0/photo-1560037962-08931d95007f.jpg");
    &:hover{
        cursor: pointer;
        i{
            display: inline;

        }
    }
    i{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 10px;
        color: yellow;
        display: none;
    }
    .without{
        color: #fff;
        text-shadow: 1px 1px 1px #ccc !important;
    }
    .fa-trash{
        color: #e74c3c;
        top: 0;
        right: 0;
    }
`

const Title = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 10px;
    font-weight: bold;
    color: #fff;
`

const Board = (props) => {

    let history = useHistory()

    const [board, setBoard] = useState(props.board)

    function favorite() {
        let newObj = { ...board, favorite: !board.favorite }
        axios.put(`http://localhost:4000/boards/${props.board._id}`, newObj).then((result) => setBoard(newObj))        
    }

    function remove(){
        axios.delete(`http://localhost:4000/boards/${props.board._id}`).then((result) => props.onDelete(props.board._id))
    }

    function handleClick(){
        history.push(`/board/${props.board._id}`)
    }

    return (
        <Main onClick={handleClick}>
            <Title>{board.name}</Title>
            <i className="fa fa-trash" onClick={remove}></i>
            {board.favorite ? <i className="fa fa-star" onClick={favorite}></i> : <i className="fa fa-star without" onClick={favorite}></i>}
        </Main>
    )
}

export default Board