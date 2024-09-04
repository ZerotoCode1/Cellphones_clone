import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const LayoutCart = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f4f6f8] min-h-[100vh]">
      <HomeLayout>
        <div className="overflow-auto relative pb-[100px] min-w-[600px] max-w-[600px] md:mx-auto">
          {children}
        </div>
      </HomeLayout>
    </div>
  );
};

export default LayoutCart;
