import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/"> HOME </Link>
      <Link to="/users"> USERS</Link>
    </header>
  );
};
