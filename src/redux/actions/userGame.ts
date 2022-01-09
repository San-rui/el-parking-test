import { UserGame } from "../../types";
import { types } from "../types";

export const processUserGame = (userGame: UserGame) =>{

    return async (dispatch: any) => {

        dispatch(startUserGame());
        try {
            dispatch(okUserGame(userGame));
        } catch (err) {
            dispatch(DeniedUserGame(err));
        }
    }
}

export const startUserGame = () => ({
    type: types.userInit,
    payload: [],
});

export const okUserGame = (data: UserGame | undefined) => ({
    type: types.userOk,
    payload: data,
});

export const DeniedUserGame = (err:any) => ({
    type: types.usersError,
    error: {
        message: err,
    },
})