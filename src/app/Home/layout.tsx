import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

const LayoutUser = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeLayout>{children}</HomeLayout>
    </>
  );
};

export default LayoutUser;
