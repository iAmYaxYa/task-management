import { nanoid } from "nanoid";
import { CREATE, EDIT, DELETE, UPDATE, CLOSE_OPEN } from "./actions";
// import { addLocalStorage } from "./context/AppContext";

const addLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const reducer = (state, action)=>{
    if (action.type === CLOSE_OPEN) {
        const element = action.payload.element;
        return {...state, [element]:!state[element]}
    }
    if (action.type === CREATE) {
        const task = action.payload.task;
        const date = task.date || new Date().toLocaleDateString();
        const id = nanoid();
        const newTask = {...task, id, date};
        const tasks = [...state.tasks, newTask];
        addLocalStorage(tasks);
        return {...state,tasks};
    }
    if (action.type === DELETE) {
        const id = action.payload.id;
        const tasks = state.tasks?.filter((task)=> task.id !== id)
        addLocalStorage(tasks);
        return {...state,tasks};
    }
    if (action.type === EDIT) {
        const id = action.payload.id;
        const element = action.payload.element;
        const tasks = state.tasks?.map((task)=> {
            if (task.id === id) {
                return {...task, [element]:!task[element]};
            }
            return task;
        })
        addLocalStorage(tasks);
        return {...state,tasks};
    }

    throw new Error('this action doesnt match');
}

export default reducer;