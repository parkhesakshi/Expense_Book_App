import React from "react";
import BookFormComponent from "../features/book-form/book-form.component";
import BookShow from "../features/book-show/book-show.component";

const LayoutComponent = () => {
  return (
    <div className="flex flex-col p-5 gap-3 ">
      <BookFormComponent />

      <BookShow />
    </div>
  );
};

export default LayoutComponent;
