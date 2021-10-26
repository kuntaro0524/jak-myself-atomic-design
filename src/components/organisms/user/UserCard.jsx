import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        alt="profile"
        height={160}
        src="https://www.pngkey.com/png/full/103-1032664_jpg-transparent-download-cute-free-download-mart-girl.png"
      />
      <p> name </p>
      <SDl>
        <dt> E-mail </dt>
        <dd> kuntaro@gmail.com </dd>
        <dt> URL </dt>
        <dd> https://kuntaro.com </dd>
        <dt> Phone </dt>
        <dd> 080 5319 1649 </dd>
      </SDl>
    </div>
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
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
