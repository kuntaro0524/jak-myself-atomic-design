import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;

  return <SInput type="text" placeholder={placeholder}></SInput>;
};

const SInput = styled.input`
  background-color: skyblue;
  border-radius: 16px;
  height: 30px;
`;
