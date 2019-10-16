import { TIMELINE } from './types';

function getFakeData(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([{
        id: 1,
        timeline: [],
      }]);
		}, 1000);
	});
}

function fetching(){
  return {
    type: TIMELINE.IS_FETCHING
  }
}

function success(data: any) {
	return {
		type: TIMELINE.SUCCESS,
		payload: data
	};
}

function failed(error: string) {
	return {
		type: TIMELINE.ERROR,
		payload: error
	};
}

export function fetchItems(){
  return async function (dispatch: any) {
		dispatch(fetching());
		try {
      await getFakeData()
        .then( data => {
          console.log(data)
          dispatch(success(data));
        });
		} catch (error) {
			dispatch(failed(error.response.data));
		}
	};
}