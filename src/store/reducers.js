import timelineReducer from './timeline'

export const initialState = {
	timeline: timelineReducer.initialState,
}

export default (state, action) => {
  const { timeline } = state;
  return {
    timeline: timelineReducer.reducer(timeline, action)
  }
}