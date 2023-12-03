import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import reducer from "../reducer";
import { CLOSE_OPEN, CREATE, DELETE, EDIT } from "../actions";

const AppContext = createContext();

const initialState = {
  isSidebar: false,
  isModal: false,
  tasks: JSON.parse(localStorage.getItem("tasks")) ?? [],
  users: new Map(),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openClose = (element) => {
    dispatch({ type: CLOSE_OPEN, payload: { element } });
  };
  const create = (task) => {
    dispatch({ type: CREATE, payload: { task } });
  };
  const deleteTask = (id) => {
    dispatch({ type: DELETE, payload: { id } });
  };
  const edit = (task) => {
    dispatch({ type: EDIT, payload: task });
  };
  return (
    <AppContext.Provider
      value={{ ...state, openClose, create, deleteTask, edit }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useContextApp = () => useContext(AppContext);
