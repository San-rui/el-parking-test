import { useEffect, useState } from "react";
import { useTime, useTrivia } from "..";
import {  AnswerObject, QuestionState, UserGame } from "../../types";
import { useHistory } from "react-router-dom";


const useGame = () =>{

    const dataGameUser: UserGame = JSON.parse(localStorage.getItem('user-session') || '{}');
    const { push }= useHistory();

    const { seconds, reStart, stopTime   } = useTime();

    const [ gameOver, setgameOver] = useState (true);
    const [questionsItems, setQuestionsItems] = useState <QuestionState[]>([]);
    const [number, setNumber] = useState (0);
    const [ score, setScore] = useState (0);
    const [userAnswers, setUserAnswers] = useState <AnswerObject[]> ([]);
    const [status, setStatus] = useState('active');
    const [name, setName] = useState('');
    const [answerResult, setAnswersResult]= useState<string[]>()

    useEffect(() => {
        
        if(seconds===0){
            nextQuestion()
            const answerObject = {
                question: dataGameUser.questions[number].question.question,
                answer: 'empty',
                correct: false,
                correctAnswer: dataGameUser.questions[number].question.correct_answer,
            }
            setUserAnswers(preState => [...preState, answerObject])
            localStorage.setItem('user-session', JSON.stringify({ ...dataGameUser, totalResults: userAnswers}));
        }

    },[ dataGameUser.gameOver, seconds ])

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

    //----FUNCION PARA INICIAR EL JUEGO-------
    
    const startTrivia = async () => {

        localStorage.setItem('user-session', JSON.stringify({ name:name, questions: items, category: items[1].question.category, gameOver: false, questionNumber: number}))
        setgameOver(false);
        setQuestionsItems(dataGameUser.questions);
        setScore(0)
        setNumber(0);
        setUserAnswers([])
        reStart()

        push('/home')
    }

    //----FUNCION PARA CHECKEAR LAS RESPUESTAS-------

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {

        if( !dataGameUser.gameOver ){

            setNumber(dataGameUser.questionNumber);
            
            
            stopTime () 

            const answer = e.currentTarget.value;
            const correct =dataGameUser.questions[number].question.correct_answer=== answer

            const array=answerResult? answerResult : []
            array.push(`${correct}`)
            setAnswersResult(array)

            if( correct ) setScore(preState => preState +1)

            const answerObject = {
                question: dataGameUser.questions[number].question.question,
                answer,
                correct,
                correctAnswer: dataGameUser.questions[number].question.correct_answer
            }
            setUserAnswers(preState => [...preState, answerObject])
            localStorage.setItem('user-session', JSON.stringify({ ...dataGameUser, score: score, questionNumber: number+1, time: seconds, totalResults: userAnswers}));
        }
    }

    //----FUNCION PARA PASAR A LA PREGUNTA SIGUIENTE------

    const nextQuestion = () => {

        reStart()
        setNumber(dataGameUser.questionNumber) 

        const nextQuestion = number +1;

        if(nextQuestion === 10){

            setgameOver(true);
            localStorage.setItem('user-session', JSON.stringify({ ...dataGameUser, gameOver: true}))

        } else {

            console.log(number, nextQuestion)

            setNumber(nextQuestion);
            localStorage.setItem('user-session', JSON.stringify({ ...dataGameUser, score: score, time: seconds, questionNumber: nextQuestion, totalResults: userAnswers}))

        }
    }

    const goDashboard =()=>{

        localStorage.setItem('user-session', JSON.stringify({ ...dataGameUser, score: score, time: seconds, questionNumber: nextQuestion, totalResults: userAnswers}))

        push('./dashboard')
    }

    return { startTrivia, checkAnswer, nextQuestion,  number, score, userAnswers, seconds, status, setName, name, goDashboard }

}

export { useGame }