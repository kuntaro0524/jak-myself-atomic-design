import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}
