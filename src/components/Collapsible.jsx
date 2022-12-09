import React, { useState } from "react";

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded shadow border max-w-lg max-h-96 bg-white text-zinc-600 ">
      <h3
        className="font-bold text-lg bg-stone-200 p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.title}
      </h3>
      {isOpen && props.children}
    </div>
  );
};

export default Collapsible;
