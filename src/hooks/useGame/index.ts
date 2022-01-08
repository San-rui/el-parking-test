import { useEffect, useState } from "react";
import { useTime, useTrivia } from "..";
import {  AnswerObject, QuestionState } from "../../types";

const useGame = () =>{

    const { seconds, reStart, stopTime   } = useTime();

    const [ gameOver, setgameOver] = useState (true);
    const [questionsItems, setQuestionsItems] = useState <QuestionState[]>([]);
    const [number, setNumber] = useState (0);
    const [ score, setScore] = useState (0);
    const [userAnswers, setUserAnswers] = useState <AnswerObject[]> ([]);
    const [status, setStatus] = useState('active')

    useEffect(() => {
        
        if(seconds===0){
            nextQuestion()
        }

    },[ gameOver, seconds ])

    useEffect(()=>{

        if(seconds <=30 && seconds>= 20){
            setStatus('success')
        } else if(seconds <20 && seconds>= 10){
            setStatus('active')
        } else{
            setStatus('error')
        }

    },[seconds])
    

    const  { items}  = useTrivia();

    const startTrivia = async () => {
        setgameOver(false);
        setQuestionsItems(items);
        setScore(0)
        setNumber(0);
        setUserAnswers([])
        reStart() 
        
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {
        if( !gameOver ){
            
            stopTime () 

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

        reStart() 

        const nextQuestion = number +1;

        if(nextQuestion === 10){
            setgameOver(true);

        } else {
            setNumber(nextQuestion);
        }

    }

    return { startTrivia, checkAnswer, nextQuestion, gameOver, questionsItems, number, score, userAnswers, seconds, status }

}

export { useGame }