"use client";
import SliderCustom from "@/Common/Slider";
import Header from "@/Components/Header";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SystemLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useRouter();
  const [dataLogin, setDataLogin] = useState<any>();
  useEffect(() => {
    const dataLogin = localStorage?.getItem("user");
    setDataLogin(dataLogin);
    return () => {
      console.log(dataLogin, "fsdfsdfsd");
      if (!dataLogin) {
        navigate.push("/");
      }
    };
  }, [dataLogin]);
  return (
    <div>
      {dataLogin && (
        <div className="bg-[#f4f6f8] min-h-[100vh]">
          <Header />
          <div className="overflow-auto relative pb-[100px] min-w-[90%] max-w-[90%] md:mx-auto">
            <div className="flex mt-5 mx-auto items-start justify-center gap-x-5">
              <div className="w-[253px] slide-custom">
                <SliderCustom />
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemLayout;
