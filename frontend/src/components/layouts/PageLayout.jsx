/* eslint-disable react/prop-types */
function PageLayout({ children }) {
  return (
    <div className="h-screen w-full bg-[#242424] flex flex-col text-white justify-center items-center">
      {children}
    </div>
  );
}

export default PageLayout;
