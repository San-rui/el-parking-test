import { apiTrivia } from "../../uttils/axios"
import { types } from "../types";

export const processTrivia = (pageNumber:number, search:string) =>{

    return async (dispatch: any) => {

        dispatch(startTrivia());

        try {
            
            const response = await apiTrivia.get('amount=10&category=17&difficulty=medium&type=multiple');
            dispatch(okTrivia(response));
        
        } catch (err) {
            dispatch(deniedTrivia(err));
        }
    }
}

const startTrivia = () => ({
    type: types.triviaInit,
    payload: [],
});

const okTrivia = (data: any) => ({
    type: types.triviaOk,
    payload: data,
});

const deniedTrivia = (err:any) => ({
    type: types.triviaError,
    error: {
        message: err,
    },
})