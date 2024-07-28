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
      <div className="text-center flex  justify-center ">
        <div style={{ maxWidth: "1500px" }}>{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
