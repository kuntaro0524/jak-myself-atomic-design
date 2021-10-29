import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/"> HOME </SLink>
      <SLink to="/users"> USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  text-align: center;
  padding: 8px 0;
`;

// 既存のコンポーネントにスタイルを当てる場合→便利！
const SLink = styled(Link)`
  margin: 0 8px;
`;
