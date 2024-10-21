import { useState } from "react";
import VisibleOn from "../buttons/visibleBtn/VisibleOn";
import VisibleOff from "./../buttons/visibleBtn/VisibleOff";

/* eslint-disable react/prop-types */
function Input({ type, label, placeholder, name, onChange = () => {} }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-6">
      <label htmlFor={name} className="text-md font-normal">
        {label}
      </label>
      <div className="w-full py-2 px-3 text-sm border border-[#3F3F3F] rounded-sm outline-none bg-[#4f4f4f] text-white placeholder:text-white placeholder:text-opacity-35 mt-2 flex flex-row">
        <input
          type={visible ? "text" : type}
          placeholder={placeholder}
          name={name}
          id={name}
          onChange={onChange}
          required
          className="bg-transparent outline-none w-full"
        />
        {type === "password" && (
          <button
            onClick={() => setVisible(!visible)}
            type="button"
            className="cursor-pointer"
          >
            {visible ? <VisibleOff /> : <VisibleOn />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
