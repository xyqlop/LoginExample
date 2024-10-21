import axios from "axios";

export const getProfilePhoto = async (userId) => {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:3002/api/user/userId/${userId}`
    );
    return data.profilePhoto;
  } catch (error) {
    console.error(error);
  }
};

export const uploadProfilePhoto = async (userId, profilePhoto) => {
  try {
    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto, profilePhoto.name);
    formData.append("userId", userId);
    const response = await axios.post(
      "http://127.0.0.1:3002/api/upload/uploadProfilePhoto",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
