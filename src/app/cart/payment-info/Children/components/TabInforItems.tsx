import React from "react";
interface Props {
  label: string;
  isCheck?: boolean;
}
const TabInforItems = (prop: Props) => {
  const { label, isCheck } = prop;
  return (
    <div className="w-full h-full flex justify-center items-center cursor-pointer gap-1">
      <input type="radio" checked={isCheck} />
      <label className="text-[#0e2431] cursor-pointer">{label}</label>
    </div>
  );
};

export default TabInforItems;
