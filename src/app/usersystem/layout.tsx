import SliderCustom from "@/Common/Slider";
import Header from "@/Components/Header";
import HomeLayout from "@/Layouts/HomeLayout";
import SystemLayout from "@/Layouts/SystemLayout";
import React from "react";

const LayoutCart = ({ children }: { children: React.ReactNode }) => {
  return <SystemLayout>{children}</SystemLayout>;
};

export default LayoutCart;
