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
    const  { items, loading }  = useSelector((state: Store) => state.trivia)

    useEffect ( () => {

        dispatch(processTrivia("medium"))

    },[dispatch])

    return { items, loading }

}

export { useTrivia }