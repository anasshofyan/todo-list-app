// src/components/TodoItem.tsx
import { Circle, CircleCheck, Trash2 } from "lucide-react";
import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Menggunakan alpha channel untuk transparansi */
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  border: 0.5px solid rgba(255, 255, 255, 0.5); /* Warna border */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Shadow */

  ${(props) =>
    props.completed &&
    `
    background-color: rgba(255, 255, 255, 0.4); /* Warna latar belakang ketika selesai */
    border: 0.5px solid rgba(255, 255, 255, 0.4); /* Warna border ketika selesai */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.0); /* Shadow */
  `}
`;

const TodoText = styled.span<{ completed: boolean }>`
  cursor: pointer;
  margin-left: 8px;
  color: ${(props) => (props.completed ? "#F3F3F3" : "#515151")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const TextContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.completed ? "#DEDEDE" : "#fec110")};
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 0, 0, 0.6);
  }
`;

const TodoItem: React.FC<ItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <TodoItemContainer completed={todo.completed}>
      <TextContainer completed={todo.completed}>
        {todo.completed ? (
          <CircleCheck style={{ color: "#00AA5B" }} size={24} />
        ) : (
          <Circle size={24} />
        )}
        <TodoText completed={todo.completed} onClick={() => onToggle(todo.id)}>
          {todo.text}
        </TodoText>
      </TextContainer>
      <DeleteButton onClick={() => onDelete(todo.id)}>
        <Trash2 size={24} />
      </DeleteButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
