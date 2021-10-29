import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter> &copy; Kunio Hirata Inc.</SFooter>;
};

const SFooter = styled.header`
  background-color: #11999e;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
