import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";
import Header from "@/Components/Header";

const LayoutCart = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f4f6f8] min-h-[100vh]">
      <Header />
      {children}
    </div>
  );
};

export default LayoutCart;
