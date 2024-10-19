import Container from "@mui/material/Container";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: number | number; //* id kann string oder number
  todo?: string; //* fals es gibt type ist string(muss man nicht definieren)
}
const url = "https://6618e8ca9a41b1b3dfbe4853.mockapi.io/todos";
const Main = () => {
  // const [todos, setTodos] = useState([] as ITodoType[])
  // const [todos, setTodos] = useState<Array<ITodoType>>([])
  const [todos, setTodos] = useState<ITodoType[]>([]); //*Allgemeine verwendung
  console.log(todos);

  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   getTodos()
  }, [])
  

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Main;
