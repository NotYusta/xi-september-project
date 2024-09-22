import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { ReactElement } from "react";

export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};
