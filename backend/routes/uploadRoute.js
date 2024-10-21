import express from "express";
import upload from "../middlewares/upload.js";
import User from "../models/User.js";

const router = express.Router();

router.post(
  "/uploadProfilePhoto",
  upload.single("profilePhoto"),
  async (req, res) => {
    try {
      const userId = req.body.userId;
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const profilePhoto = `/uploads/${req.file.filename}`;
      console.log(profilePhoto);

      const user = await User.findByIdAndUpdate(userId, {
        profilePhoto: profilePhoto,
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res
        .status(200)
        .json({ message: "Profile photo uploaded successfully", profilePhoto });
    } catch (error) {
      res.status(500).json({ message: "Error uploading profile photo" });
    }
  }
);

export default router;
