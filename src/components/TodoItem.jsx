import React from 'react'
import { styled } from 'styled-components'

const TodoItem = ({item}) => {
  return (
    <StyledTodoItem>
        <CardImg>
            <CharacterImg src={item.image}/>
        </CardImg>
        <>
            <h3>name: {item.name}</h3>
            <h3>gender: {item.gender}</h3>
            <h3>species: {item.species}</h3>
        </>
    </StyledTodoItem>
  )
}

const StyledTodoItem = styled.li`
    width: 250px;
    margin-bottom: 20px;
    margin-top: 10px;
    list-style: none;
    border-radius: 12px;
    box-shadow: 3px 5px 5px 5px;

    @media screen and (max-width: 525px){
        flex-wrap: wrap;
    }
`

const CardImg = styled.div`
    height: 50%;
`
const CharacterImg = styled.img`
    width: 100%;
    height: 100%;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
`

export default TodoItem