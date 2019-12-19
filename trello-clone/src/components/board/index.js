import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import List from './list'
import {useToasts} from 'react-toast-notifications'

const Main = styled.div`
    grid-area: content;
    display: grid;
    grid-template-rows: 6vh 85vh;
    background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/c48e502274322eb1bf5dfada1bbfeda0/photo-1560037962-08931d95007f.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`

const SubNav = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    i{
        color: white;
        font-size: 1.6em;
        margin-left: 11px;
        &:hover{
            cursor: pointer;
        }
    }
    .isFavorite{
        color: #f1c40f;
    }
    border-bottom: 1px solid white;
    opacity: 0.2;
    background-color: black;
    z-index: 10;
`
const SubContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: baseline;
    margin-top: 2%;
    padding: 0px 10px;
    overflow-x: auto;
`

const BoardName = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1em;
    padding: 5px;
`
const CreateListButton = styled.button`
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 1.0em;
    border: 1px solid white;
    border-radius: 3px;
    padding: 5px;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
    }
`

const InputCreateList = styled.input`
    margin-left: 5px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    &:focus{
        border-bottom: 1px solid blue;
    }
`

const Board = () => {

    const {addToast} = useToasts()

    const {id} = useParams()

    const [board, setBoard] = useState({name: '', favorite: false, _id: ''})
    const [lists, setLists] = useState([])
    const [listName, setListName] = useState('')
    const [isCreatingList, setIsCreatingList] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:4000/boards/${id}`).then((response) => setBoard(response.data))
        axios.get(`http://localhost:4000/lists/board/${id}`).then((response) => setLists(response.data))
    }, [])

    function onFavorite(){
        let newObj = { ...board, favorite: !board.favorite }
        axios.put(`http://localhost:4000/boards/${board._id}`, newObj).then((result) => setBoard(newObj)) 
    }

    function createList(e){
        if(e.key === 'Enter'){
            let obj = {
                name: listName,
                position: 0,
                boardId: board._id
            }
    
            axios.post(`http://localhost:4000/lists/board/${board._id}`, obj).then((list) => setLists([...lists, obj]))
            renderCreatingList()
            addToast('Lista criada com sucesso', {
                appearance: 'success',
                autoDismiss: true,
                
            })
        }
    }

    function renderCreatingList() {
        setIsCreatingList(!isCreatingList)
    }

    function handleNameList(e){
        setListName(e.target.value)
    }

    function onDeleteList(id){
        let newList = lists.filter((item) => item._id !== id)
        setLists(newList)
    }

    return(
        <Main>
            <SubNav>
                <BoardName>{board.name}</BoardName>
                {board.favorite ? <i className="fa fa-star isFavorite" onClick={onFavorite}></i> : <i className="fa fa-star" onClick={onFavorite}></i>}
            </SubNav>
            <SubContent>
                {
                    lists.map((item, i) => <List key={i} board={board} list={item} onDelete={onDeleteList} />)
                }
                <CreateListButton onClick={renderCreatingList}>Criar nova lista</CreateListButton> 
                {
                    isCreatingList && <InputCreateList type="text" placeholder="Digite o nome da sua lista"  onChange={handleNameList} onKeyDown={createList}></InputCreateList>
                }
            </SubContent>

        </Main>
    )
}

export default Board