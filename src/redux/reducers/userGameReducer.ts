import { types } from "../types"

const initialState = {}

export const userGameReducer = (state=initialState, action: any) =>{
    switch(action.type) {

        case types.userInit:
            return {
                ...state,
            }

        case types.userOk:
            return action.payload?{
                name: action.payload.name,
                questionNumber: action.payload.questionNumber,
                questions: action.payload.questions,
                score: action.payload.score,
                time: action.payload.time,
                level: action.payload.level,
            }: state

        case types.usersError:
            return {
                data: { errorCode:400 },
            }
        
        default :
            return state
    }

}