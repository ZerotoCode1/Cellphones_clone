"use client";
import { BASE_ROUTER } from "@/Components/Contant/apiUrl";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";
type MenuItem = Required<MenuProps>["items"][number];

const SliderCustom = () => {
  const navigate = useRouter();
  const hanldeClick = (e: any) => {
    navigate.push(`${e?.key}`);
  };

  return (
    <div>
      <div>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[BASE_ROUTER.HOME]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", width: "253px" }}
            items={items}
            onClick={hanldeClick}
            className="bg-slider"
          />
        </Sider>
      </div>
    </div>
  );
};

export default SliderCustom;
const items: MenuItem[] = [
  {
    key: BASE_ROUTER.ORDERSYSTEM,
    icon: (
      <div>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 20V9.67412C3.5 9.04041 3.80033 8.4442 4.30954 8.067L11.3095 2.88182C12.0167 2.35797 12.9833 2.35797 13.6905 2.88182L20.6905 8.067C21.1997 8.4442 21.5 9.04041 21.5 9.67412V20C21.5 21.1046 20.6046 22 19.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20Z"
            stroke="#121219"
            stroke-width="1.5"
          ></path>{" "}
          <path
            d="M9 22V15C9 14.1716 9.67157 13.5 10.5 13.5H14.5C15.3284 13.5 16 14.1716 16 15V22"
            stroke="#121219"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>
    ),
    label: "Trang chủ",
  },
  {
    key: BASE_ROUTER.USERSYSTEM,
    label: "Quản lý đơn hàng",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.56203 19.7C8.38203 18.82 9.63203 18.89 10.352 19.85L11.362 21.2C12.172 22.27 13.482 22.27 14.292 21.2L15.302 19.85C16.022 18.89 17.272 18.82 18.092 19.7C19.872 21.6 21.322 20.97 21.322 18.31V7.04C21.332 3.01 20.392 2 16.612 2H9.05203C5.27203 2 4.33203 3.01 4.33203 7.04V18.3C4.33203 20.97 5.79203 21.59 7.56203 19.7Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M8.9281 11H8.93708"
          stroke="#292D32"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M11.7305 11H17.2305"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M8.9281 7H8.93708"
          stroke="#292D32"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M11.7305 7H17.2305"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    key: BASE_ROUTER.LOGJOUT,
    label: "Thoát tài khoản",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M14.9991 12H3.61914"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M5.85 8.65039L2.5 12.0004L5.85 15.3504"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
  },
];
