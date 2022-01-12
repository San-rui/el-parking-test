import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { processTrivia } from "../../redux/actions/triviaAction";
import { QuestionState } from "../../types";

type Store={
    trivia:{
        items: QuestionState[],
        error: {errorCode:string }|null,
        loading: false,
    }
}

const useTrivia = () =>{

    const dispatch = useDispatch()
    const  { items, loading }  = useSelector((state: Store) => state.trivia);

    useEffect ( () => {

        const number = (Math.floor(Math.random() * (32 - 9 + 1) + 9))
        dispatch(processTrivia('medium', number))

    },[ dispatch ])

    return { items, loading }

}

export { useTrivia }