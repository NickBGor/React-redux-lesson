import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbiden = ['fuck', 'php']

export function forbidenWordsMiddleWare({dispatch}) {
    return function (next) {
        return function (action) {
            if(action.type === CREATE_POST) {
                const found = forbiden.filter(w => action.payload.title.includes(w))
                if(found.length) {
                    return dispatch(showAlert("Вы Спамер"))
                }
            }
            return next(action)
        }
    }
}