import React from "react";

const BookShow = ({ expensedata }) => {
  const getMonth = (date) => {
    return new Date(date).toLocaleString("default", { month: "long" });
  };
  const getYear = (date) => {
    return new Date(date).getFullYear();
  };
  const getDay = (date) => {
    return new Date(date).getDate();
  };

  return (
    <div className="flex flex-col gap-y-3 bg-blueLightColor basis-[60%] rounded-md p-3">
      <div className="flex justify-between">
        <p className="text-white">Filter by year</p>
        <select name="" id="">
          <option value="">Select a Year...</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div className="h-full overflow-auto flex flex-col gap-4">
        {expensedata?.length ? (
          expensedata?.map((item, index) => (
            <div
              className="flex items-center justify-between p-2 h-[75px] w-full bg-white-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white"
              key={index}>
              <div className="flex gap-2 items-center">
                <div className="flex flex-col justify-center items-center bg-blueLightColor p-2 border-white border-[1px] text-white h-full w-[68px] rounded-md ">
                  <span className="text-[9px] font-semibold">{getMonth(item.date)}</span>
                  <span className="text-[9px] font-light">{getYear(item.date)}</span>
                  <span className="font-bold">{getDay(item.date)}</span>
                </div>
                <p className="text-white">{item.title}</p>
              </div>
              <div className="px-5 py-1 text-white border-white border-[1px] rounded-md bg-brownColor">
                ${item.amount}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-white">No Record Found</div>
        )}
      </div>
    </div>
  );
};

export default BookShow;
