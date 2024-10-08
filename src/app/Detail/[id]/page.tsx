"use client";
import ProductServices, {
  ResponseProductById,
} from "@/services/Products/Getproduct";
import Image from "next/image";
import { useEffect, useState } from "react";
import SilserViewItem from "./Children/SilserViewItem";
import Specifications from "./Children/Specifications";
import { Progress, Rate } from "antd";
import { SourceIcon } from "@/Components/Iconsvg";
import Ratting from "./Children/Ratting";
import QandA from "./Children/QandA";
import { calc } from "antd/es/theme/internal";
import { conVertPrice } from "@/Components/Contant/convertdata";
import { useRouter } from "next/navigation";
import { popUp } from "@/Common/PopUp";
import RattingModal from "./Children/Modal/RattingModal";
import SaticsRate from "./Children/SaticsRate";
import TotalStaticRate from "./Children/TotalStaticRate";
import { useStoreCart } from "@/Lib/Store/CartStore/CartStore";
import Link from "next/link";

interface PropDetailProdcut {
  params: { id: string };
}

const DetailProduct = (prop: PropDetailProdcut) => {
  const [data, setData] = useState<ResponseProductById>();
  const [more, setShowmore] = useState<boolean>(false);
  const [version, setVersion] = useState<number>(0);
  const [colorVersion, setColorVersion] = useState<number>(0);
  const [star, setStar] = useState<{ star: any; hasImage: boolean }>({
    star: undefined,
    hasImage: false,
  });
  const [showModalRatting, setShowRatting] = useState<boolean>(false);
  const [priceVersion, setPriceVersion] = useState<number>(0);
  const addToCart = useStoreCart((state) => state.addToCart);

  const router = useRouter();
  const [filterRatting, setFilterRatting] = useState<{
    all?: boolean;
    withImage?: boolean;
    purchased?: boolean;
  }>({
    all: true,
    withImage: false,
    purchased: false,
  });
  const { id } = prop.params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductServices.getProDuctById({
          _id: id,
        });
        if (res) {
          setData(res.data);
        }
      } catch (error) {}
    };
    fetchData();
  }, [id]);
  const handleShowmore = () => {
    setShowmore(!more);
  };
  const renderUrlImage = (nameColor: string) => {
    const url = data?.versionColor.find((item) => {
      return item.name === nameColor;
    });
    return url?.image ?? "";
  };
  const handleFilterRatting = (type: "all" | "withImage" | "purchased") => {
    if (type !== "all") {
      setFilterRatting({
        ...filterRatting,
        all: false,
        [type]: !filterRatting[type],
      });
      setStar((pre) => ({ ...pre, hasImage: true }));
    } else {
      setStar((pre) => ({ star: undefined, hasImage: false }));
      setFilterRatting({
        all: true,
        withImage: false,
        purchased: false,
      });
    }
  };

  const handleChooseRatting = (index: number) => {
    setStar((pre) => ({ star: index, hasImage: pre?.hasImage ?? false }));
    setFilterRatting((pre) => ({ ...pre, all: false }));
  };

  const handleAddToCart = () => {
    if (!data) return;
    addToCart({
      id: id,
      img: data?.image[0] ?? "",
      titleProduct: data?.productName ?? "",
      price: priceVersion,
      salePrice: priceVersion,
      quantity: 1,
      noneCheck: false,
      id_version: data?.version?.[version]?._id,
      keyColor:
        Object.keys(data?.version?.[version]?.quannity[colorVersion])?.[0] ??
        "",
    });
  };
  console.log(version);

  const handleActivePrice = (index: number, price: number) => {
    setColorVersion(index);
    setPriceVersion(price);
  };
  useEffect(() => {
    if (data?.version) {
      setPriceVersion(data?.version[version].priceVersion);
    }
  }, [data, version]);
  const handleOnlyAddCart = () => {
    if (!data) return;
    addToCart({
      id: id,
      img: data?.image[0] ?? "",
      titleProduct: data?.productName ?? "",
      price: priceVersion,
      salePrice: priceVersion,
      quantity: 1,
      noneCheck: false,
      id_version: data?.version?.[version]?._id,
      keyColor:
        Object.keys(data?.version?.[version]?.quannity[colorVersion])?.[0] ??
        "",
    });
  };
  return (
    <div>
      <div className="h-[30px] sadow-global w-full">
        <ul className="flex w-[100vh]">
          <li>Điện thoại</li>
          <li>Apple</li>
          <li>Iphone 15 series</li>
        </ul>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <p className="text-left font-bold text-[18px]">{data?.productName}</p>
        <Rate disabled defaultValue={5} style={{ fontSize: "16px" }} />
        <p>6 đánh giá</p>
      </div>
      <div
        className="w-full grid grid-cols-10 gap-6 mt-3 pt-4"
        style={{
          borderTop: "1px solid #ddd",
        }}
      >
        <div className="col-span-6">
          <SilserViewItem
            image={data?.image ?? []}
            versionColor={data?.versionColor ?? [{ name: "", image: "" }]}
            activerColorVersion={colorVersion}
            vdeo={
              data?.vdeo ??
              "https://www.youtube.com/embed/jyoFEA0o1XQ?si=BPMopWBXIwINJxzW"
            }
          />
        </div>
        <div className="col-span-4">
          <div className="flex gap-4">
            {data?.version &&
              data?.version.map((item: any, index: number) => (
                <>
                  <div className="relative">
                    <div
                      className={`rounded-[8px] min-w-[158px] min-h-[50px] border-version ${
                        version === index && "active-version"
                      } `}
                      onClick={() => setVersion(index)}
                    >
                      <p className="font-semibold">{item?.nameVersion}</p>
                      <p>{conVertPrice(item?.priceVersion)}</p>
                    </div>
                  </div>
                </>
              ))}
          </div>
          <p className="text-left my-[10px]">
            Chọn màu để xem giá và chi nhánh có hàng
          </p>
          <div className="flex gap-4">
            {data?.version[version]?.quannity.map(
              (item: any, index: number) => (
                <>
                  <div
                    className="relative"
                    onClick={() =>
                      handleActivePrice(
                        index,
                        data?.version[version]?.priceVersion
                      )
                    }
                  >
                    <div
                      className={`rounded-[8px] min-w-[158px] min-h-[50px]
                      border-version ${
                        colorVersion === index && " active-version"
                      } flex
                      p-x-[5px] py-[4px] gap-2 justify-center
                      `}
                    >
                      <img
                        src={renderUrlImage(Object.keys(item)[0])}
                        alt="fsdf"
                        height={50}
                        width={50}
                      />
                      <div>
                        <p className="font-medium">{Object.keys(item)[0]}</p>
                        <p>
                          {conVertPrice(
                            Number(data?.version[version]?.priceVersion)
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
          <div className="price-buy">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn2.cellphones.com.vn/x35,webp/media/icon/pdp-trade-icon.png"
                alt="fdsfsd"
                height={35}
                width={32}
              />
              <div>
                <p className="text-left">6690000đ</p>
                <p>khi thu cũ lên đời</p>
              </div>
            </div>
            <div className="show-price">
              <p className="text-[#fd2424] font-semibold">
                {conVertPrice(Number(priceVersion) ?? 0)}
              </p>
              <p className="line-through">
                {conVertPrice(Number(data?.price) ?? 0)}
              </p>
            </div>
          </div>
          <div
            className="text-left flex w-full justify-between mt-5"
            style={{ width: "calc(100% - 80px)" }}
          >
            <button className="btn-buy" onClick={handleAddToCart}>
              <Link href="/cart">
                <p>Mua ngay</p>
                <span>(Giao nhanh 2 giờ hoặc nhận tại cửa hàng)</span>
              </Link>
            </button>
            <div className="img-cart" onClick={handleOnlyAddCart}>
              <img
                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:50:0/q:70/plain/https://cellphones.com.vn/media/wysiwyg/add-to-cart.png"
                alt="gdfgdf"
                height={30}
                width={25}
                className="m-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {data && (
        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="col-span-2">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                maxHeight: !more ? "500px" : "",
                boxShadow:
                  "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
              }}
              className="p-2 relative"
            >
              <div
                dangerouslySetInnerHTML={{ __html: data?.content }}
                className="p-[15px]"
              />
              <div
                className="sticky bottom-0 left-0 w-full h-[98px]"
                style={{
                  background:
                    "linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.91) 50%,#fff 55%)",
                }}
              >
                <button
                  onClick={handleShowmore}
                  style={{
                    boxShadow:
                      "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
                    maxWidth: "335px",
                  }}
                  className="mb-3 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#fff]  font-semibold rounded-[10px] h-[35px] w-[335px]"
                >
                  {!more ? "Xem thêm" : "Thu gọn"}
                </button>
              </div>
            </div>
            <div
              style={{
                minHeight: "800px",
                maxHeight: !more ? "1000px" : "",
                boxShadow:
                  "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
              }}
              className="mt-4 p-2 relative box-item"
            >
              <p className="text-left font-semibold">
                Đánh giá & nhận xét {data.productName}
              </p>

              <TotalStaticRate productId={id} />
              <div
                className="min-h-[120px] flex flex-col justify-center items-center gap-3"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <p>Bạn đánh giá sao về sản phẩm này? </p>
                <button
                  className="bg-[#D7000E] w-[163px] h-10 text-[#fff] rounded-[8px]"
                  onClick={() => setShowRatting(true)}
                >
                  Đánh giá ngay
                </button>
              </div>
              <div>
                <p className="font-semibold text-left">Lọc theo</p>
                <div className="flex gap-2">
                  <button
                    style={{ border: "1px solid #ccc" }}
                    className={`rounded-[15px] px-6 py-[3px] ${
                      filterRatting.all && "bg-[#D70018] text-[#fff]"
                    } `}
                    onClick={() => handleFilterRatting("all")}
                  >
                    tất cả
                  </button>
                  <button
                    style={{ border: "1px solid #ccc" }}
                    className={`rounded-[15px] px-6 py-[3px]  ${
                      filterRatting.withImage && "bg-[#D70018] text-[#fff]"
                    }`}
                    onClick={() => handleFilterRatting("withImage")}
                  >
                    có hình ảnh
                  </button>
                  <button
                    style={{ border: "1px solid #ccc" }}
                    className={`rounded-[15px] px-6 py-[3px] ${
                      filterRatting.purchased && "bg-[#D70018] text-[#fff]"
                    }`}
                    onClick={() => handleFilterRatting("purchased")}
                  >
                    đã mua hàng
                  </button>
                </div>
                <div className="flex gap-2 mt-3">
                  {[5, 4, 3, 2, 1].map((item) => (
                    <>
                      <button
                        key={item}
                        onClick={() => handleChooseRatting(item)}
                        style={{ border: "1px solid #ccc" }}
                        className={`rounded-[15px] px-6 py-[3px] flex justify-center items-center gap-1  ${
                          star?.star === item ? "bg-ratting" : ""
                        }`}
                      >
                        {item} <SourceIcon.Star />
                      </button>
                    </>
                  ))}
                </div>
                <div className="mt-5">
                  {<Ratting productId={id} numberRate={star ?? ""} />}
                </div>
              </div>
            </div>
            <div
              className="min-h-[500px] p-5 mt-5 rounded-[10px]"
              style={{
                boxShadow:
                  "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
              }}
            >
              <p className="font-bold text-[18px] text-left ">Hỏi và đáp</p>
              <QandA />
            </div>
          </div>
          <div className="">
            <Specifications numberTechnical={data?.version[version]?.data} />
          </div>
        </div>
      )}
      {popUp.ModalCommon({
        className: "modal-common",
        title: "Đánh giá & nhận xét",
        children: (
          <RattingModal productId={id} nameProduct={data?.productName ?? ""} />
        ),
        open: showModalRatting,
        width: 600,
        onCancel() {
          setShowRatting(false);
        },
      })}
    </div>
  );
};

export default DetailProduct;
