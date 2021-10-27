import styled from "styled-components";
import { Card } from "../../atoms/card/Card";

export const UserCard = (props) => {
  const { user } = props;

  return (
    <Card>
      <img alt="profile" height={160} src={user.image} />
      <p> {user.name} </p>
      <SDl>
        <dt> E-mail </dt>
        <dd> {user.email}</dd>
        <dt> URL </dt>
        <dd> {user.url} </dd>
        <dt> Phone </dt>
        <dd> {user.phone} </dd>
        <dt> Company</dt>
        <dd> {user.company.name} </dd>
      </SDl>
    </Card>
  );
};

// テーブルにスタイルを適用する
const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  /* dlタグの中のdtタグという設定方法（これは覚えておかないと駄目） */
  dt {
    float: left;
  }
  dd {
    padding-left: 100px;
    padding-bottom: 8px;
  }
`;
