import { useEffect, useState } from "react";
import { useTrivia } from "..";
import {  AnswerObject, QuestionState } from "../../types";

const useGame = () =>{

    const [ gameOver, setgameOver] = useState (true);
    const [questionsItems, setQuestionsItems] = useState <QuestionState[]>([]);
    const [number, setNumber] = useState (0);
    const [ score, setScore] = useState (0);
    const [userAnswers, setUserAnswers] = useState <AnswerObject[]> ([]);

    const  { items}  = useTrivia();
    console.log(items)

    const startTrivia = async () => {
        setgameOver(false);
        setQuestionsItems(items);
        setScore(0)
        setNumber(0);
        setUserAnswers([])
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {
        if( !gameOver ){
            const answer = e.currentTarget.value;
            const correct =questionsItems[number].question.correct_answer === answer;

            if( correct ) setScore(preState => preState +1)

            const answerObject = {
                question: questionsItems[number].question.question,
                answer,
                correct,
                correctAnswer: questionsItems[number].question.correct_answer
            }
            setUserAnswers(preState => [...preState, answerObject])
        }

    }

    const nextQuestion = () => {

        const nextQuestion = number +1;

        if(nextQuestion === 10){
            setgameOver(true);

        } else {
            setNumber(nextQuestion);
        }

    }

    return { startTrivia, checkAnswer, nextQuestion, gameOver, questionsItems, number, score, userAnswers }

}

export { useGame }