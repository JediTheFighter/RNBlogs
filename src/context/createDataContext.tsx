import React, {ReactNode, useReducer, useContext, Dispatch} from 'react';

// Define generic types for state and action
export type State<T> = T;
export type Action<T> = {type: string; payload?: any};

// Define the shape of the context value
type ContextValue<T, A> = {
  state: State<T>;
  dispatch: Dispatch<Action<T>>;
} & A;

// Props for the Provider component
interface ProviderProps {
  children: ReactNode;
}

// Function to create the context and provider
function createDataContext<T, A extends {[key: string]: any}>(
  reducer: (state: State<T>, action: Action<T>) => State<T>,
  actions: {[K in keyof A]: (dispatch: Dispatch<Action<T>>) => A[K]},
  initialState: State<T>,
) {
  const Context = React.createContext<ContextValue<T, A> | undefined>(
    undefined,
  );

  const Provider: React.FC<ProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Create an object of bound actions
    const boundActions: A = {} as A;
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{state, dispatch, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  // Custom hook to use the context
  const useDataContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error('useDataContext must be used within a Provider');
    }
    return context;
  };

  return {Provider, useDataContext};
}

export default createDataContext;
