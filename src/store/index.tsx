import React, { createContext, useReducer, useCallback, useContext } from 'react';
import reducers, { initialState } from './reducers';

interface IContextProps {
	state: any;
	dispatch: any;
}

const asyncer = (dispatch: any, state: any) => (action: any) => {
  return typeof action === 'function' ? action(dispatch, state) : dispatch(action);
}

const StoreProvider = createContext({} as IContextProps);

export const useStore = () => useContext(StoreProvider);

export default function Provider({ children } : { children: React.ReactNode}) {
  const [ state, dispatchBase ] = useReducer(reducers, initialState);
  const dispatch = useCallback(asyncer(dispatchBase, state), []);
	
	return (
		<StoreProvider.Provider value={{ state, dispatch }}>
			{ children }
		</StoreProvider.Provider>
	);
}