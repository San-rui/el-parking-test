import { TriviaState, TriviaReducer} from "../../types";
import { types } from "../types";

const intialState: TriviaState = {
    loading: false,
    items: [],
    error: ''
}

export const triviaReducer = (state = intialState, action: TriviaReducer) => {

    switch(action.type) {
        case types.triviaInit :
            return {
                ...state,
                loading: true,
            }
            
        case types.triviaOk:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
            
        case types.triviaError :
            return {
                ...state,
                loading: false,
                error: "No se pudo el listado de cinema"
            }

        default : return state
    }

}