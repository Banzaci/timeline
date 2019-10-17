import React, { createContext, useReducer, useCallback, useContext } from 'react';
import mainReducer, { initialState } from './reducers';

interface IContextProps {
	state: any;
	dispatch: any;
}

const asyncer = (dispatch: any, state: any) => (action: any) => {
  return typeof action === 'function' ? action(dispatch, state) : dispatch(action);
}

const Store = createContext({} as IContextProps);

export const useGlobalStore = () => useContext(Store);

export default function Provider({ children } : { children: React.ReactNode}) {
  const [ state, dispatchBase ] = useReducer(mainReducer, initialState);
  const dispatch = useCallback(asyncer(dispatchBase, state), []);
	
	return (
		<Store.Provider value={{ state, dispatch }}>
			{ children }
		</Store.Provider>
	);
}