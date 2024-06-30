import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HomeLayout>{children}</HomeLayout>
    </div>
  );
};

export default LayoutHome;
