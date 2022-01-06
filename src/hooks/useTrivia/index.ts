import { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { processTrivia } from "../../redux/actions/triviaAction";
import { Question } from "../../types";

type Store={
    trivia:{
        items: Question[],
        error: {errorCode:string }|null,
        loading: false,
    }
}

const useTrivia = () =>{


    const dispatch = useDispatch()
    const  { items, loading }  = useSelector((state: Store) => state.trivia)

    useEffect ( () => {

        dispatch(processTrivia("medium"))

    },[dispatch])

    const startTrivia = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement> ) => {

    }

    const nextQuestion = () => {

    }

    return { items, loading , startTrivia, checkAnswer, nextQuestion }

}

export { useTrivia }