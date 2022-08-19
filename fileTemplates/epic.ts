import {Action} from "redux";
import {Epic} from "redux-observable";

export const epic${NAME}: Epic<Action, IState, IStoreDependencies, Action> = (
    action$,
    store,
    deps,
) =>
    action$
        .ofType()
        .ignoreElements();
