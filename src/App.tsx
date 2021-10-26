import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton> UNKO </PrimaryButton>
      <SecondaryButton> CHINKO </SecondaryButton>
    </div>
  );
}
