import styled from "styled-components";

const ContainerStyle = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  overflow: hidden;
  ${(props) =>
    props.width ? `max-width: ${props.width};` : `max-width: 100%;`}
`;
export default ContainerStyle;
