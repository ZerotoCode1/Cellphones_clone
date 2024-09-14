"use client";
import { BASE_ROUTER } from "@/Components/Contant/apiUrl";
import HomeLayout from "@/Layouts/HomeLayout";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LayoutCart = ({ children }: { children: React.ReactNode }) => {
  const navigate = useRouter();
  const dataLogin = localStorage.getItem("user");
  useEffect(() => {
    return () => {
      if (!dataLogin) {
        navigate.push(BASE_ROUTER.LOGJOUT);
      }
    };
  }, [dataLogin]);
  return (
    dataLogin && (
      <div className="bg-[#f4f6f8] min-h-[100vh]">
        <HomeLayout>
          <div className="overflow-auto relative pb-[100px] min-w-[600px] max-w-[600px] md:mx-auto">
            {children}
          </div>
        </HomeLayout>
      </div>
    )
  );
};

export default LayoutCart;
