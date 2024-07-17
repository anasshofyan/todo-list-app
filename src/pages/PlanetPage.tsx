import React from "react";
import ContainerStyle from "../assets/styles/ContainerStyles";
import Title from "../components/Planet/Title";
import PlanetList from "../components/Planet/PlanetList";
import { ActionButton } from "../assets/styles/PlanetStyles";
import { useNavigate } from "react-router-dom";

const PlanetPage: React.FC = () => {
  const nav = useNavigate();
  return (
    <>
      <ContainerStyle>
        <Title>ECLIPSE of Eternia 🚀</Title>
        <ActionButton onClick={() => nav("/to-do")}>To Do List 📝</ActionButton>
        <PlanetList />
      </ContainerStyle>
    </>
  );
};

export default PlanetPage;
