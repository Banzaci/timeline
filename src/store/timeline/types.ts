export interface ITIMELINE {
	[index: number]: {
		id: number;
		timeline: [object];
	}
}

export enum TIMELINE {
	FETCH = 'TIMELINE_FETCH',
	IS_FETCHING = 'TIMELINE_IS_FETCHING',
	SUCCESS = 'TIMELINE_SUCCESS',
	ERROR =  'TIMELINE_ERROR',
}