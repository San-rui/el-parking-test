import { mapToArray } from "../../helpers";
import { QuestionState } from "../../types";
import { apiTrivia } from "../../uttils/axios"
import { types } from "../types";


export const processTrivia = ( difficulty: string, category: number) =>{

    return async (dispatch: any) => {

        dispatch(startTrivia());

        try {
            
            const response = await (await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)).json();
            dispatch(okTrivia(mapToArray(response.results)));
        
        } catch (err) {
            dispatch(deniedTrivia(err));
        }
    }
}

const startTrivia = () => ({
    type: types.triviaInit,
    payload: [],
});

const okTrivia = (data: QuestionState[]) => ({
    type: types.triviaOk,
    payload: data,
});

const deniedTrivia = (err:any) => ({
    type: types.triviaError,
    error: {
        message: err,
    },
})