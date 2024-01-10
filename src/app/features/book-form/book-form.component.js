import React, { useState } from "react";

const initialState = {
  title: "",
  amount: <undefined></undefined>,
  date: new Date(),
};

const BookFormComponent = ({ addExpenceData }) => {
  const [expenceFormData, setexpenceFormData] = useState({ ...initialState });

  const handleAdd = () => {
    addExpenceData(expenceFormData);
    setexpenceFormData(initialState);
  };

  const handleFormChange = (e) => {
    setexpenceFormData({ ...expenceFormData, [e.target.name]: e.target.value });
  };

  const [showForm, setShowForm] = useState(false);
  const newExpenseButton = () => {
    return (
      <button
        className="p-2 bg-brownColor w-fit rounded-md text-white"
        onClick={() => {
          setShowForm(true);
        }}>
        Add New Expense
      </button>
    );
  };
  const expenseForm = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleFormChange}
              value={expenceFormData.title}
              className="px-2 py-1 rounded-md outline-none border-none"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              onChange={handleFormChange}
              value={expenceFormData.amount}
              className="px-2 py-1 rounded-md outline-none border-none"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleFormChange}
              value={expenceFormData.date}
              className="px-2 py-1 rounded-md outline-none border-none"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-end">
          <button
            className=" p-2 bg-brownColor rounded-md text-white"
            onClick={() => {
              setexpenceFormData(initialState);
              setShowForm(false);
            }}>
            Cancel
          </button>
          <button className=" p-2 bg-brownColor rounded-md text-white" onClick={() => handleAdd()}>
            Add Expense
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="flex p-3 bg-brownLightColor rounded-md justify-center items-center basis-[40%]">
      {!showForm ? newExpenseButton() : expenseForm()}
    </div>
  );
};

export default BookFormComponent;
