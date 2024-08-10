import Header from "@/Components/Header";
import React from "react";

const LayoutCart = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f4f6f8] min-h-[100vh]">
      <Header />
      {children}
    </div>
  );
};

export default LayoutCart;
