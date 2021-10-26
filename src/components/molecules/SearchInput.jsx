import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <Input placeholder="検索するものを入れる" />
      <PrimaryButton>Submit</PrimaryButton>
    </div>
  );
};
