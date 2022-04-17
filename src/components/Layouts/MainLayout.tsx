import React from "react";
import Footer from "./Footer";
import GlobalStyler from "./GlobalStyler";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div>
      <GlobalStyler />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
