import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
export default function App() {
  return (
    <div className="App">
      <SearchInput />
      <UserCard />
    </div>
  );
}
