/* eslint-disable react/prop-types */
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

function UserPhotoProfile({ currProfilePhoto }) {
  const [profilePhoto, setProfilePhoto] = useState("");

  const token = localStorage.getItem("token");

  const decoded = jwtDecode(token);
  const userId = decoded.id;

  useEffect(() => {
    const fetchGetProfilePhoto = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:3002/api/user/userId/${userId}`
        );
        setProfilePhoto(data.profilePhoto);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGetProfilePhoto();
  }, [userId, currProfilePhoto]);

  useEffect(() => {
    if (currProfilePhoto) {
      setProfilePhoto(currProfilePhoto);
      console.log(currProfilePhoto);
    }
  }, [currProfilePhoto]);

  return (
    <img
      src={`http://127.0.0.1:3002${profilePhoto}`}
      alt={"Profile Photo"}
      className="object-contain"
    />
  );
}

export default UserPhotoProfile;
