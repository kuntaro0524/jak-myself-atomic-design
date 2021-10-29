import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Hooter";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
