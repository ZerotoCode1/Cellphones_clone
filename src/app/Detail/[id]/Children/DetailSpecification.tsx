import React from "react";
interface Props {
  numberTechnical: [];
}
const DetailSpecification = (props: Props) => {
  const { numberTechnical } = props;
  const groupedByTopic = numberTechnical.reduce((acc: any, item: any) => {
    if (!acc[item.topic]) {
      acc[item.topic] = [];
    }
    acc[item.topic].push(item);
    return acc;
  }, {});

  const resultArray = Object.keys(groupedByTopic).map((topic) => ({
    topic,
    items: groupedByTopic[topic],
  }));

  console.log(resultArray, "fsdfsdfd");
  return (
    <div className="relative">
      <div
        className="w-full px-4 py-3 rounded-[10px] "
        style={{
          boxShadow:
            "0 1px 2px 0 rgba(60, 64, 67, .1), 0 2px 6px 2px rgba(60, 64, 67, .15)",
        }}
      >
        <div className="max-h-[300px] overflow-auto pb-4 px-2">
          <div className="rounded-[10px]">
            {resultArray.map((value: any, index) => (
              <>
                <div>
                  <p className="text-[#363636] m-2 font-bold">{value?.topic}</p>
                  <div
                    className="grid grid-cols-2 w-full p-2 text-left rounded-[10px]"
                    style={{
                      backgroundColor: index % 2 ? "" : "#f2f2f2",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {value.items.map((items: any) => (
                      <>
                        <div
                          style={{
                            color: items?.representative ? "#485fc7" : "",
                          }}
                        >
                          {items.technical}
                        </div>
                        <div>{items.describe}</div>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-[12px] left-0 w-full px-6 h-[76px] flex items-center"
          style={{ borderTop: "1px solid #dbdbdb", backgroundColor: "#fff" }}
        >
          <button
            className="rounded-[10px] h-[35px] mt-[12px] w-full bg-[#c51f27] text-[#fff] font-semibold"
            style={{
              boxShadow:
                "0 1px 2px 0 rgba(60,64,67,.1),0 2px 6px 2px rgba(60,64,67,.15)",
            }}
          >
            Đóng
          </button>
        </div>
        <div className="w-full min-h-20"></div>
      </div>
    </div>
  );
};

export default DetailSpecification;
