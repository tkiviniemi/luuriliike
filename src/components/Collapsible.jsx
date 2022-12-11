import React, { useState } from "react";

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded shadow border max-w-lg min-w-full max-h-96 bg-white text-zinc-600">
      <button
        className="flex min-w-full font-bold text-lg bg-stone-200 p-1 hover:bg-stone-300 justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.title}
        <a className="mr-2"> {isOpen ? "▲" : "▼"}</a>
      </button>
      {isOpen && props.data}
    </div>
  );
};

export default Collapsible;
