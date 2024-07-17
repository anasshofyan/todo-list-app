import React from "react";
import styled from "styled-components";

const TitleStyles = styled.h1`
  color: white;
  font-size: 3vw;
  text-align: center;
  margin-top: 3rem;
  font-weight: 700;
`;

const Title: React.FC<TitleProps> = ({ children }) => {
  return <TitleStyles>{children}</TitleStyles>;
};

export default Title;
