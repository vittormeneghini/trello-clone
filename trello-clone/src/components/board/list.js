import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './card'
import Axios from 'axios'
import { useToasts } from 'react-toast-notifications'


const Main = styled.div`
    border-radius: 3px;
    background-color: #EBECF0;
    display: flex;
    flex-wrap: wrap;
    max-width: 250px;
    margin-left: 1%;
`

const Title = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
    margin-right: 10px;
    &:focus{
        background-color: white;
        border-radius: 3px;
    }
`

const FooterHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    width: 100%;
    .fa-trash{
        &:hover{
            cursor: pointer;
        }
    }
`

const ButtonFlex = styled.button`
    display: flex;
    align-items: center;
    padding: 5px;
    border: none;
    width: 100%;
    background-color: transparent;
    &:hover{
        background-color: rgb(217, 219, 226);
        border-radius: 2px;
        cursor: pointer;
    }
    i{
        color: #717D92;
    }
    p{
        font-size: 1em;
        margin-left: 5px;
        color: #717D92;
    }
`

const Content = styled.div`
    display: flex;
    height: auto;
    padding: 5px;
    width: 100%;
    flex-wrap: wrap;
`

const InputCreatingCard = styled.input`
    margin: 2%;
    border: none;
    background-color: white;
    width: 100%;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    &:focus{
        border-bottom: 1px solid blue;
    }
`

const List = (props) => {

    const [board, setBoard] = useState(props.board)
    const [list, setList] = useState(props.list)
    const { addToast } = useToasts()
    const [cards, setCards] = useState([])
    const [isCreatingCard, setIsCreatingCard] = useState(false)
    const [cardName, setCardName] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:4000/cards/list/${list._id}`).then((response) => {
            setCards(response.data)
        })
    }, [])

    function handleName(e) {
        setList({ ...list, name: e.target.value })
    }

    function saveName() {
        Axios.put(`http://localhost:4000/lists/${list._id}`, list)
    }

    function deleteList() {
        Axios.delete(`http://localhost:4000/lists/${list._id}`).then(function ({ status }) {
            if (status === 200) {
                props.onDelete(list._id)
                addToast('Lista excluida com sucesso', {
                    appearance: 'success',
                    autoDismiss: true
                })
            }
        })
    }

    function setCreatingCard() {
        setIsCreatingCard(!isCreatingCard)
    }

    function handleCardName(e) {
        setCardName(e.target.value)
    }

    function saveCard(e) {
        let obj = {
            listId: list._id,
            title: cardName
        }
        console.log(obj)
        if (e.key === 'Enter') {
            Axios.post(`http://localhost:4000/cards/list/${list._id}`, obj).then((response) => 
            { 
                setCards([...cards, response.data])
                addToast(`Cartão criado com sucesso na lista ${list.name}`, { autoDismiss: true, appearance: 'success' })
                setCreatingCard()
            })
        }
    }

    return (
        <Main>
            <FooterHeader>
                <Title value={list.name} type="text" onChange={handleName} onBlur={saveName}></Title>
                <i className="fa fa-trash" onClick={deleteList}></i>
            </FooterHeader>
            <Content>
                {cards.map((item, i) => <Card key={i} card={item} />)}
            </Content>
            <FooterHeader>
                <ButtonFlex onClick={setCreatingCard}>
                    <i className="fa fa-plus"></i>
                    <p>Adicionar outro cartão</p>
                </ButtonFlex>
            </FooterHeader>
            {
                isCreatingCard && <InputCreatingCard placeholder="Digite o nome do seu cartão" onKeyDown={saveCard} onChange={handleCardName}></InputCreatingCard>
            }
        </Main>
    )
}


export default List