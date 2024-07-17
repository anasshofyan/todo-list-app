import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 1rem;
  align-self: center;
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  margin-bottom: 2rem;

  //   md: 768px
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #000;
  font-size: 1rem;
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;

  &::placeholder {
    color: #fff;
    opacity: 1;
  }
`;
