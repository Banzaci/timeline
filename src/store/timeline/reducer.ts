import { TIMELINE, ITIMELINE } from './types';

export const initialState: ITIMELINE[] = [];

export default function timeline(state = initialState, action: any) {
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