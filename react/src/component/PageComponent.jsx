import React from "react";

export default function PageComponent({ title, buttons = "", children }) {
  return (
    <>
      <>
        <div className="py-6 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
      </>
    </>
  );
}
