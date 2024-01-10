import React, { useState } from "react";

const BookFormComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const newExpenseButton = () => {
    return (
      <button
        className=" p-2 bg-brownColor w-fit"
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add New Expense
      </button>
    );
  };
  const expenseForm = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-2 gap-3">
          <input type="text" name="" id="" className=""/>
          <input type="number" name="" id="" />
          <input type="date" name="" id="" />
        </div>
        <button
          className=" p-2 bg-brownColor"
          onClick={() => {
            setShowForm(false);
          }}
        >
          Cancel
        </button>
        <button className=" p-2 bg-brownColor">Add Expense</button>
      </div>
    );
  };
  return (
    <div className="flex p-3 bg-brownLightColor">
      {!showForm ? newExpenseButton() : expenseForm()}
    </div>
  );
};

export default BookFormComponent;
