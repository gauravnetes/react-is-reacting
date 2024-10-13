import React, {createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";
// Initial State
const InitialState = {
    transactions: []
}

// create context
export const GlobalContext = createContext(InitialState);

// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // Actions:
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>) 
}