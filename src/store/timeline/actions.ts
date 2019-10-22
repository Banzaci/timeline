import axios from 'axios';
import { useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import { TIMELINE } from './types';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
});

async function fetchData() {
	const { data } = await axios.get('http://localhost:4000/api/timeline');
	return data;
}

async function gqlHandler() {
	return client
  	.query({
			query: gql`
				{
					timeLineById(userId: 1){
						today,
						booked {
							name,
							desc
						},
						timeline {
							name,
							desc,
							task {
								completed
							}
						}
					}
				}
			`
  })
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
			const { data } = await gqlHandler();
      dispatch(success(data.timeLineById));
		} catch (error) {
			dispatch(failed(error));
		}
	};
}