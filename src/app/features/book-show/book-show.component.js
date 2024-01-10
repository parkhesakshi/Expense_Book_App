import React from "react";

const BookShow = () => {
  return (
    <div className="flex flex-col gap-y-3 bg-blueLightColor">
      <div className="flex  ">
        <p className="text-white">Filter by year</p>
        <select name="" id="">
          <option value="">Select a Year...</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default BookShow;
