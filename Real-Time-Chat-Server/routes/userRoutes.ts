import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  deleteAccount,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/update-password", protect, updateUserPassword);
router.post("/delete-account", protect, deleteAccount);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export { router };
