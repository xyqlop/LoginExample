/* eslint-disable react/prop-types */
function InputFile({ onChange = () => {}, title, hidden = false }) {
  return (
    <label
      className="cursor-pointer py-2 px-4 bg-transparent text-slate-200 border border-slate-200 hover:bg-slate-200 hover:text-slate-800 font-bold rounded  transition-colors duration-300 ease-in-out text-center"
      htmlFor="file"
    >
      {title}
      <input
        id="file"
        type="file"
        onChange={onChange}
        className={`h-fit text-sm border border-[#3F3F3F] rounded-sm outline-none bg-[#4f4f4f] text-white placeholder:text-white placeholder:text-opacity-35 mt-2 hidden ${
          hidden ? "opacity-0" : ""
        }`}
      />
    </label>
  );
}

export default InputFile;
