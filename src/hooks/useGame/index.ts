import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTime, useTrivia } from "..";
import {  AnswerObject, QuestionState, StoreUser } from "../../types";
import { processUserGame } from "../../redux/actions/userGame";


const useGame = () =>{

    const currentUserGame =useSelector((store:StoreUser)=>store.userGame);
    const dispatch = useDispatch();

    const { seconds, reStart, stopTime   } = useTime();

    const [ gameOver, setgameOver] = useState (true);
    const [questionsItems, setQuestionsItems] = useState <QuestionState[]>([]);
    const [number, setNumber] = useState (0);
    const [ score, setScore] = useState (0);
    const [userAnswers, setUserAnswers] = useState <AnswerObject[]> ([]);
    const [status, setStatus] = useState('active');
    const [name, setName] = useState('');


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
    
    const  { items }  = useTrivia();
    
    useEffect ( () => {

        dispatch(processUserGame( currentUserGame ))

    },[dispatch])
    
    const startTrivia = async () => {
        dispatch(processUserGame({ name:name, questions: items }))
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

            dispatch(processUserGame({...currentUserGame, score: score, questionNumber: number+1, time: seconds}))
        }

    }

    const nextQuestion = () => {

        dispatch(processUserGame({...currentUserGame, score: score, questionNumber: number+1, time: seconds}))

        reStart() 

        const nextQuestion = number +1;

        if(nextQuestion === 10){
            setgameOver(true);

        } else {
            setNumber(nextQuestion);
        }

    }




    return { startTrivia, checkAnswer, nextQuestion, gameOver, questionsItems, number, score, userAnswers, seconds, status, currentUserGame, setName }

}

export { useGame }