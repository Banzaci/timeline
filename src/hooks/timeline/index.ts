import { useStore } from '../../store';

import bindActions from '../../store/bindActions';
import timelineReducer from '../../store/timeline';

const { actions } = timelineReducer;

const useTimeline: any = () => {
	const { state, dispatch } = useStore(); 
	
	const { timeline } = state;
	const { fetchItems } = actions;

	const timelineActions = bindActions({
		fetchItems,
		addItem: () => {}
	}, dispatch);

	return { data: timeline, ...timelineActions };
}

export default useTimeline;