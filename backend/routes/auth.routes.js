import express from "express";
import { signup } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", (req, res) => {
  res.json({
    data: "You hit the login endpoint",
  });
});
router.post("/logout", (req, res) => {
  res.json({
    data: "You hit the logout endpoint",
  });
});

export default router;
