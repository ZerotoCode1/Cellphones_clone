import { useCategoryStore } from "@/Lib/Store/Category/CategoryStore";
import { SourceIcon } from "../Iconsvg";
import CardSeo from "./components/CardSeo";
const ListCategory = () => {
  const listCategory = useCategoryStore((state) => state.listCategory);
  return (
    <div
      className="h-[370px] relative max-w-[219px] min-w-[219px] rounded-[15px] z-10 "
      style={{
        boxShadow:
          "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
      }}
    >
      {listCategory?.map((categoryItem, index) => (
        <div
          key={index}
          className=" category-hover flex items-center gap-x-2 p-[6px] justify-between cursor-pointer hover:bg-gray-100 hover:text-[#e91e18]"
        >
          <div
            style={{
              boxShadow:
                "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15) ",
            }}
            className="absolute bg-[#FFFFFF] h-full w-[100vh]  top-0 left-[100%]  rounded-[10px] turnoncategory p-5"
          >
            <CardSeo id={index} />
          </div>
          <div className="flex">
            <i
              style={{
                backgroundImage: `url(${categoryItem?.image})`,
                width: "25px",
                height: "25px",
                marginRight: "5px",
              }}
            />
            <span className="text-[12px] font-semibold text-[#343a40] hover:text-[#e91e18]">
              {categoryItem?.name}
            </span>
          </div>
          <SourceIcon.ArowCategory />
        </div>
      ))}
    </div>
  );
};

export default ListCategory;
const mocData = [
  {
    icon: "https://cellphones.com.vn/media/icons/menu/icon-cps-3.svg",
    titleCategory: "Điện thoại",
  },
  {
    icon: "https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-380.svg",
    titleCategory: "Lap top",
  },
  {
    icon: "https://cellphones.com.vn/media/icons/menu/icon-cps-220.svg",
    titleCategory: "Đồ gia dụng",
  },
  {
    icon: "https://cellphones.com.vn/media/icons/menu/icon-cps-610.svg",
    titleCategory: "Đồng hồ thông minh",
  },
  {
    icon: "https://cellphones.com.vn/media/icons/menu/icon-cps-845.svg",
    titleCategory: "Phụ kiện điện thoại",
  },
  {
    icon: "https://cellphones.com.vn/media/icons/menu/icon-cps-30.svg",
    titleCategory: "Liên kiện máy tính",
  },
  {
    icon: "https://cdn2.cellphones.com.vn/x/media/icons/menu/icon_cpu.svg",
    titleCategory: "Thu cũ đổi mới",
  },
  {
    icon: "https://cellphones.com.vn/media/icons/menu/icon-cps-1124.svg",
    titleCategory: "Giao hàng hoả tốc",
  },
  {
    icon: "https://cellphones.com.vn/media/icons/menu/icon-cps-tcdm.svg",
    titleCategory: "Điện máy - Gia dụng",
  },
  {
    icon: "https://cdn2.cellphones.com.vn/x/media/icons/menu/icon-cps-29.svg",
    titleCategory: "Sim số - Thẻ cào",
  },
];
