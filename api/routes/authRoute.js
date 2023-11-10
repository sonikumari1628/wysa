import { Router } from "express";
import { signup, getData } from "../controllers/authControl.js";

const router = Router();



// Questions Routes
router.post("/signup", signup);
router.get("/signup/:id", getData);







export default router;