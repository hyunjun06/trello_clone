import { atom } from "recoil";

interface IToDoState {
    [key: string] : string[],
}

export const toDoState = atom<IToDoState>({
    key: 'toDos',
    default: {
       "To Do": ["a", "b", "c", "d", "e", "f"],
       Doing: [],
       Done: [],
    },
});
