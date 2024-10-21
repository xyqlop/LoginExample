import { jwtDecode } from "jwt-decode";
import InputFile from "../inputs/InputFile";
import PageLayout from "../layouts/PageLayout";
import { useEffect, useState } from "react";
import Navbar from "./../layouts/Navbar";
import UserPhotoProfile from "../users/UserPhotoProfile";
import {
  getProfilePhoto,
  uploadProfilePhoto,
} from "../../services/profile.service";

function Profile() {
  const [userId, setUserId] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [currProfilePhoto, setCurrProfilePhoto] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    setUserId(decoded.id);
    setUserName(decoded.userName);
    setEmail(decoded.email);
  }, []);

  useEffect(() => {
    if (profilePhoto) {
      uploadProfilePhoto(userId, profilePhoto);
      window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilePhoto]);

  useEffect(() => {
    setCurrProfilePhoto(getProfilePhoto(userId));
  }, [userId]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
    console.log(file);
  };

  return (
    <PageLayout>
      <Navbar />

      <div className="flex justify-between h-[70vh] w-full px-8">
        <div className="w-1/4 flex justify-center items-center">
          <div className="rounded-full border border-gray-400 bg-slate-100 overflow-hidden">
            <UserPhotoProfile currProfilePhoto={currProfilePhoto} />
          </div>
        </div>
        <div className="w-2/3 py-7 px-8 flex flex-col justify-between cursor-default">
          <div className="inline-block">
            <h3 className="text-6xl font-bold mb-4 hover-fx-primary ">
              {userName}
            </h3>
            <p className="text-2xl font-medium hover-fx-secondary ">{email}</p>
          </div>

          <div>
            <form>
              <InputFile
                onChange={handlePhotoChange}
                title={"Change Profile Photo"}
              />
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Profile;
