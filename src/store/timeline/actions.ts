import axios from 'axios';
import ApolloClient, { gql } from 'apollo-boost';
import { TIMELINE } from './types';

async function fetchData() {
	const { data } = await axios.get('http://localhost:4000/api/timeline');
	return data;
}

async function gqlHandler() {
	const client = new ApolloClient({
		uri: 'http://localhost:4000/graphql',
	});
	client
  	.query({
			query: gql`
				{
					rates(currency: "USD") {
						currency
					}
				}
			`
  })
  .then(result => console.log(result));
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
			const { data } = await fetchData();
      dispatch(success(data));
		} catch (error) {
			dispatch(failed(error.response.data));
		}
	};
}