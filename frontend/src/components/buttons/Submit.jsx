/* eslint-disable react/prop-types */
function Submit({
  children,
  onClick = () => {},
  type = "submit",
  disabled = false,
}) {
  return (
    <input
      className="bg-transparent border border-green-500 text-green-500 cursor-pointer hover:bg-green-500 hover:text-white font-bold py-2 px-4 w-full rounded transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:border-red-800 disabled:text-red-800 disabled:hover:bg-transparent"
      onClick={onClick}
      type={type}
      value={children}
      disabled={disabled}
    />
  );
}

export default Submit;
