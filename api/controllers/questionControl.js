import Question from "../models/question.js";
import Result from "../models/result.js";


//get all questions
export const getQuestions = async(req, res, next) => {
    try {
        const data = await Question.find();
        res.status(200).json({
            status:true,
            data,
        });
    } catch (error) {
        console.log(error);
        res.json({error})
    }
}


//insert questions
export const postQuestions = async(req, res, next) => {
    try {
        const {question, options, type} = req.body;
        const newQuestion = new Question({question, options, type});

        const allQuest = await newQuestion.save();

        res.status(201).json(allQuest);
        
    } catch (error) {
        res.json({error})
    }
}