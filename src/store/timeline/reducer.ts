import { TIMELINE, ITIMELINE } from './types';

export const initialState: ITIMELINE[] = [];

export default function message(state = initialState, action: any) {
	switch (action.type) {
		case TIMELINE.FETCH: {
			return [
				...state,
				{
					completed: false,
				},
			];
		}
		case TIMELINE.SUCCESS: {
			return [
				...state,
				{
					id: Date.now(),
					timeline: action.payload,
					completed: true,
				},
			];
		}
		default: {
			return state;
		}
	}
}