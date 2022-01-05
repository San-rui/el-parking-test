import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { processTrivia } from "../../redux/actions/triviaAction";
import { Question } from "../../types";

type Store={
    trivia:{
        items: Question[],
        error: {errorCode:string }|null,
    }
}

const useTrivia = () =>{

    const dispatch = useDispatch()
    const  { items }  = useSelector((state: Store) => state.trivia)

    useEffect ( () => {

        dispatch(processTrivia(10, "medium"))

    },[dispatch])

    const startTrivia = () => {

    }

    const checkAnswer = () => {

    }

    const nextQuestion = () => {

    }

    return { items }

}

export { useTrivia }