// ユーザのイメージと名前だけを使うということを想定してその組み合わせの部分だけを切り離すイメージのmolecule

export const UserIconWithName = (props) => {
  // componentの昨日としては名前とイメージを表示するだけなので受け取るpropsも限定しておいたほうがみんなにとってわかりやすい
  const { name, image } = props;
  return (
    <div>
      <img alt="profile" height={160} src={image} />
      <p> {name} </p>
    </div>
  );
};
