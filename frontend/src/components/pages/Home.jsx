import PageLayout from "../layouts/PageLayout";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";

function Home() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    setUserName(decoded.userName);
  }, []);

  return (
    <PageLayout>
      <Navbar />

      <div className="text-center flex flex-col justify-center items-center gap-2">
        <h1 className="text-6xl font-semibold">Home</h1>
        <hr />
        <h3 className="text-3xl font-medium mb-2">
          Hello{" "}
          <span className="bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
            {userName}
          </span>
        </h3>
      </div>
    </PageLayout>
  );
}

export default Home;
