import React, { useEffect, useState } from "react";
import ContainerStyle from "../assets/styles/ContainerStyles";
import Title from "../components/Planet/Title";
import { ActionButton, FlexRow } from "../assets/styles/PlanetStyles";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/Todo/TodoList";
import TodoForm from "../components/Todo/TodoForm";

const TodoPage: React.FC = () => {
  const nav = useNavigate();

  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <ContainerStyle>
        <ContainerStyle width="50%">
          <Title>To Do List 📝</Title>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
          <FlexRow>
            <ActionButton onClick={() => nav("/")}>Back</ActionButton>
          </FlexRow>
        </ContainerStyle>
      </ContainerStyle>
    </>
  );
};

export default TodoPage;
