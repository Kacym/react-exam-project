import "./App.css";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setTodos(response.data.results);
      })
      .catch((error) => {
        console.error("Ошибка при запросе данных:", error);
      });
  }, []);

  return (
    <div className="App">
      <CharacterList>
        {todos.map((el) => {
          return <TodoItem key={el.id} item={el} />;
        })}
      </CharacterList>
    </div>
  );
}

const CharacterList = styled.ul`
  width: 90%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0;
`

export default App;
