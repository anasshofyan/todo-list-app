import styled from "styled-components";

export const PlanetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;

  //   xl: 1280px
  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  //   lg: 1024px
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  //   md: 768px
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PlanetCard = styled.div`
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  text-align: center;
  witdh: 100%;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const ActionButton = styled.button`
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  color: white;
  height: 36px;
  width: 140px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const BackButton = styled.button`
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  margin-top: 20px;
  color: white;
  height: 40px;
  width: 40px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.3);
  margin-left: 10px;
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const LoaderContainer = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const EndMessage = styled.p`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const PlanetDetailRow = styled.div`
  margin-bottom: 8px;
  align-items: left;
`;

export const FlexRow = styled.div`
  display: flex;
  direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
