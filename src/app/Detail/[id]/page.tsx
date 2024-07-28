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
interface PropDetailProdcut {
  params: { id: string };
}

const DetailProduct = (prop: PropDetailProdcut) => {
  const [data, setData] = useState<ResponseProductById>();
  const [more, setShowmore] = useState<boolean>(false);
  const [version, setVersion] = useState<number>(0);
  const [colorVersion, setColorVersion] = useState<number>(0);
  const [star, setStar] = useState<number>();
  const [filterRatting, setFilterRatting] = useState<{
    all: boolean;
    withImage: boolean;
    purchased: boolean;
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
        setData(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const handleShowmore = () => {
    setShowmore(!more);
  };
  const renderUrlImage = (nameColor: string) => {
    const url = data?.versionColor.find((item) => {
      return item.name === nameColor;
    });
    return url?.image ?? "";
  };
  console.log(filterRatting, "fsfdsfsd");
  const handleFilterRatting = (type: "all" | "withImage" | "purchased") => {
    if (type !== "all") {
      setFilterRatting({
        ...filterRatting,
        all: false,
        [type]: !filterRatting[type],
      });
    } else {
      setFilterRatting({
        all: true,
        withImage: false,
        purchased: false,
      });
    }
  };

  const handleChooseRatting = (index: number) => {
    setStar(index);
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
      <div className="w-full grid grid-cols-10 gap-6 mt-5">
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
                        version === index && " active-version"
                      } `}
                      onClick={() => setVersion(index)}
                    >
                      <p className="font-semibold">{item?.nameVersion}</p>
                      <p>{item?.priceVersion}</p>
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
                    onClick={() => setColorVersion(index)}
                  >
                    <div
                      className={`rounded-[8px] min-w-[158px] min-h-[50px]
                      border-version ${
                        colorVersion === index && " active-version"
                      } flex
                      p-x-[5px] py-[4px] gap-2 justify-center
                      `}
                    >
                      <Image
                        src={renderUrlImage(Object.keys(item)[0])}
                        alt=""
                        height={50}
                        width={50}
                      />
                      <div>
                        <p className="font-medium">{Object.keys(item)[0]}</p>
                        <p>{data?.version[version]?.priceVersion}</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
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
              <div
                className="grid grid-cols-10 py-5 min-h-[180px]"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <div
                  className="col-span-3 justify-center items-center flex flex-col gap-y-2"
                  style={{ borderRight: "1px solid #ccc" }}
                >
                  <p className="text-left">5</p>
                  <Rate
                    disabled
                    defaultValue={5}
                    style={{ fontSize: "16px" }}
                  />
                  <p>188 đánh giá</p>
                </div>
                <div className="col-span-7 px-12 gap-y-2 flex flex-col">
                  {rattings.map((item, index) => (
                    <>
                      <div className="flex items-center space-x-2">
                        <p className="flex gap-1">
                          {item.name} <SourceIcon.Star />
                        </p>
                        <div className="flex-1">
                          <Progress
                            percent={(item.number / item.toTalRate) * 100}
                            showInfo={false}
                            strokeColor={"#D70018"}
                          />
                        </div>
                        <p>{item.number} đánh giá </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div
                className="min-h-[120px] flex flex-col justify-center items-center gap-3"
                style={{ borderBottom: "1px solid #ccc" }}
              >
                <p>Bạn đánh giá sao về sản phẩm này? </p>
                <button className="bg-[#D7000E] w-[163px] h-10 text-[#fff] rounded-[8px]">
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
                  {[5, 4, 3, 2, 1].map((item, index) => (
                    <>
                      <button
                        onClick={() => handleChooseRatting(index)}
                        style={{ border: "1px solid #ccc" }}
                        className={`rounded-[15px] px-6 py-[3px] flex justify-center items-center gap-1  ${
                          star === index ? "bg-ratting" : ""
                        }`}
                      >
                        {item} <SourceIcon.Star />
                      </button>
                    </>
                  ))}
                </div>
                <div className="mt-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <Ratting key={index} />
                  ))}
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
    </div>
  );
};

export default DetailProduct;
const rattings = [
  {
    name: "5 ",
    number: 12,
    toTalRate: 16,
  },
  {
    name: "4 ",
    number: 4,
    toTalRate: 16,
  },
  {
    name: "3 ",
    number: 0,
    toTalRate: 16,
  },
  {
    name: "2 ",
    number: 0,
    toTalRate: 16,
  },
  {
    name: "1 ",
    number: 0,
    toTalRate: 16,
  },
];
