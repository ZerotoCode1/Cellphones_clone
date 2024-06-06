import Header from "@/Components/Header";
import React from "react";
interface BaseLayoutProps {
  children: React.ReactNode;
}
const HomeLayout = (prop: BaseLayoutProps) => {
  const { children } = prop;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
