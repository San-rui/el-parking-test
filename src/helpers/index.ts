import { Question } from "../types";

export const newArray = (array: any[]) => [...array].sort(()=> Math.random() -0.5); 

export const mapToArray = (data: Question[])=>{

    return data.map((question: Question)=>(
        { 
            question,
            answers: newArray([
                ...question.incorrect_answers, 
                question.correct_answer
            ])
        }
    ))
}