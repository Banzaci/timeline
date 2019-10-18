import { useGlobalStore } from '../../store';

import bindActions from '../../store/bindActions';
import timelineReducer from '../../store/timeline';

const { actions } = timelineReducer;

const useTimeline: any = () => {
	const { state, dispatch } = useGlobalStore(); 
	
	const { timeline } = state;
	const { fetchItems } = actions;

	const timelineActions = bindActions({
		fetchItems,
	}, dispatch);

	return { data: timeline, ...timelineActions };
}

export default useTimeline;