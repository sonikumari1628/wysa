import { Router } from "express";
import { getQuestions, postQuestions } from "../controllers/questionControl.js";

const router = Router();



// Questions Routes
router.get("/", getQuestions);
router.post("/", postQuestions);







export default router;