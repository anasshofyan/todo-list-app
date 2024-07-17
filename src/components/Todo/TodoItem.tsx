// src/components/TodoItem.tsx
import React from "react";
import styled from "styled-components";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
`;

const TodoText = styled.span<{ completed: boolean }>`
  cursor: pointer;
  ${(props) =>
    props.completed &&
    `
    text-decoration: line-through;
    color: #808080; /* text-gray-500 */
  `}
`;

const DeleteButton = styled.button`
  margin-left: 8px;
  font-size: 14px;
  color: #ff0000; /* text-red-500 */
`;

const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggle }) => {
  return (
    <TodoItemContainer>
      <TodoText completed={todo.completed} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </TodoText>
      <DeleteButton onClick={() => onDelete(todo.id)}>Delete</DeleteButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
