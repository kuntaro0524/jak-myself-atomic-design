import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// BaseButtonを別コンポーネントとして準備して、そのコンポーネントに対してパラメタを追加したり上書きしたりする
const SButton = styled(BaseButton)`
  background-color: blue;
  color: white;
  padding: 9px 25px;
`;
