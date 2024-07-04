import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  deleteAllNotification,
  // deleteNotification,
  getNotification,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotification);
router.delete("/", protectRoute, deleteAllNotification);

//we can add deleting a single notification if we want to
// router.delete("/:id", protectRoute, deleteNotification);

export default router;
