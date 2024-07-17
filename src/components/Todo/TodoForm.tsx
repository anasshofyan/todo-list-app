// src/components/TodoForm.tsx
import React from "react";
import { Form, InputGroup, TodoInput } from "../../assets/styles/SearchStyles";
import { ActionButton } from "../../assets/styles/PlanetStyles";

const TodoForm: React.FC<TodoForm> = ({ addTodo }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = e.currentTarget.todo.value.trim();
    if (text) {
      addTodo(text);
      e.currentTarget.todo.value = "";
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <TodoInput
          type="text"
          name="todo"
          placeholder="Tambahkan todo baru..."
        />
        <ActionButton type="submit">Tambah</ActionButton>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
