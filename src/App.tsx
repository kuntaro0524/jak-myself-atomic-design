import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "平田邦生",
  image:
    "https://www.pngkey.com/png/full/103-1032664_jpg-transparent-download-cute-free-download-mart-girl.png",
  email: "kunio.hirata@riken.jp",
  phone: "08053191649",
  url: "https://kuntaro.com",
  company: {
    name: "RIKEN/SPring-8 Center"
  }
};

export default function App() {
  return (
    <div className="App">
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
