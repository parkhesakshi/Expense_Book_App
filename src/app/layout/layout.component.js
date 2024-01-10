import React, { useState } from "react";
import BookFormComponent from "../features/book-form/book-form.component";
import BookShow from "../features/book-show/book-show.component";

const LayoutComponent = () => {
  const [expensedata, setExpensedata] = useState([]);

  const addExpenceData = (data) => {
    setExpensedata((prev) => [...prev, data]);
  };
  return (
    <div className="flex flex-col p-5 gap-3 bg-greyWhiteColor w-[800px] h-[500px] rounded-md">
      <BookFormComponent addExpenceData={addExpenceData} />
      <BookShow expensedata={expensedata} />
    </div>
  );
};

export default LayoutComponent;
