import PageLayout from "../layouts/PageLayout";

function Loading() {
  return (
    <PageLayout>
      <div className="flex gap-5 justify-center items-center">
        <div className="bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 h-16 w-16 rounded-full animate-pulse"></div>
        <h3 className="text-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
          Loading...
        </h3>
      </div>
    </PageLayout>
  );
}

export default Loading;
