import {Action} from "redux";

export const enum TypeAction${NAME} {
    #[[$END$]]#,
}

export interface IAction${NAME} extends Action {
    type: TypeAction${NAME};
}

export const action${NAME} = (): IAction${NAME} => ({
    type: TypeAction${NAME}.,
});
