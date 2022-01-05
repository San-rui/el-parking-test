import { Question } from "../../types";
import { apiTrivia } from "../../uttils/axios"
import { types } from "../types";


export const processTrivia = (amount: number, difficulty: string) =>{

    return async (dispatch: any) => {

        dispatch(startTrivia());

        try {
            
            const response = await (await fetch(`https://opentdb.com/api.php?amount=${amount}&category=17&difficulty=${difficulty}&type=multiple`)).json();
            dispatch(okTrivia(response.results));
        
        } catch (err) {
            dispatch(deniedTrivia(err));
        }
    }
}

const startTrivia = () => ({
    type: types.triviaInit,
    payload: [],
});

const okTrivia = (data: Question[]) => ({
    type: types.triviaOk,
    payload: data,
});

const deniedTrivia = (err:any) => ({
    type: types.triviaError,
    error: {
        message: err,
    },
})