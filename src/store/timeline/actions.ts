import { TIMELINE } from './types';
import moment from 'moment';
import { DATE_FORMAT } from '../../shared/misc';

function getFakeData(){

	return new Promise((resolve) => {
		const bookedDate = moment().subtract(17,'d');
		const departureDate = moment().subtract(17,'d');
		const today = moment(new Date()).format(DATE_FORMAT);

		// const r = moment.range(bookedDate, departureDate)

		setTimeout(() => {
			resolve({
				today,
				booked: {
					id: 1,
					name: 'Bookad',
					date: bookedDate,
					desc: 'Grattis! Du har bokat din resa till Omar för två till hotell Desert Inn med avresa 12 mars 2020.',
					link: {
						text: 'Din resa',
						href: 'https://www.tui.se'
					}
				},
				timeline: [
					{
						id: 2,
						name: 'Vaccination',
						desc: 'Du behöver vaccinera dig minst 3 veckor innan avresa till Omar.',
						task: {
							completed: false
						}
					},
					{
						id: 3,
						name: 'Betala resan',
						date: moment().subtract(2,'d'),
						desc: 'Senast dag för att betala din resa.',
						link: {
							text: 'Hitta din faktura här',
							href: 'https://www.tui.se'
						},
						task: {
							completed: true
						}
					},
					{
						id: 2,
						name: 'Visum',
						desc: 'Du behöver ansöka om visum till Omar. Rekommenderad sista dag är 15 januari 2020. Klicka på länken nedan för att söka visum.',
						link: {
							text: 'Ansök här',
							href: 'https://www.tui.se'
						},
						task: {
							completed: false
						}
					},
					{
						id: 4,
						name: 'Köpa badbyxor och solkräm',
						desc: 'Har du inte inskaffat badkläder så är det hög tid för det nu. Solkräm hittar du i våran taxfreebutik.',
						link: {
							text: 'Taxfreebutiken',
							href: 'https://www.tui.se'
						}
					}
				],
				departure: {
					id: 5,
					name: 'Avresa',
					desc: 'Äntligen så är det dags för sol och värme. Vi på TUI hoppas att du får en fantastisk resa och glöm inte passet',
					date: departureDate,
				}
			});
		}, 200);
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
      const data = await getFakeData()
      dispatch(success(data));
		} catch (error) {
			dispatch(failed(error.response.data));
		}
	};
}