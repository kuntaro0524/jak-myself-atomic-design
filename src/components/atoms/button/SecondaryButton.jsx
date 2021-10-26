import styled from "styled-components";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 2px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
