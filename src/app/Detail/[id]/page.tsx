"use client";
import { SourceIcon } from "@/Components/Iconsvg";
import { useStore } from "@/Lib/Store/Store";
import React from "react";

interface PropDetailProdcut {
  params: { id: string };
}

const DetailProduct = (prop: PropDetailProdcut) => {
  const data = useStore((state: any) => state.listusers);
  console.log(data, "wwwwwwwwwwww");
  const { id } = prop.params;
  console.log(id, "fsfsfsdfsdsdf");

  return (
    <div>
      <div className="h-[30px] sadow-global w-full">
        <ul className="flex w-[100vh]">
          <li>Điện thoại</li>
          <li>Apple</li>
          <li>Iphone 15 series</li>
        </ul>
      </div>
      <div>fsdfsfssdf</div>
    </div>
  );
};

export default DetailProduct;
