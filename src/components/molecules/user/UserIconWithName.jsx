import styled from "styled-components";
// ユーザのイメージと名前だけを使うということを想定してその組み合わせの部分だけを切り離すイメージのmolecule

export const UserIconWithName = (props) => {
  // componentの昨日としては名前とイメージを表示するだけなので受け取るpropsも限定しておいたほうがみんなにとってわかりやすい
  const { name, image } = props;
  return (
    <SContainer>
      <SImage alt="profile" height={160} src={image} />
      <SName> {name} </SName>
    </SContainer>
  );
};

// ユーザ名と画像を中央揃え
const SContainer = styled.div`
  text-align: center;
`;

// 画像を丸っぽくする
const SImage = styled.img`
  border-radius: 30%;
  background-color: green;
`;

// 名前の表示;
const SName = styled.p`
  font-size: 36px;
  font-weight: bold;
`;
