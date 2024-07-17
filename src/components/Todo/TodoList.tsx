// src/components/TodoList.tsx
import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoListContainer = styled.div`
  margin-top: 16px;
`;

const TodoList: React.FC<Props> = ({ todos, onDelete, onToggle }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
