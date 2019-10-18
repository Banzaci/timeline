import { TIMELINE } from './types';

function getFakeData(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
        {
          id: 1,
					name: 'Bookad',
					date: new Date().toDateString(),
					desc: 'Grattis! Du har bokat din resa till Omar för två till hotell Desert Inn med avresa 12 mars 2020.',
					link: {
						text: 'Din resa',
						href: 'https://www.tui.se'
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
						checked: false
					}
				},
        {
          id: 3,
					name: 'Betala resan',
					date: new Date().toDateString(),
					desc: 'Senast dag för att betala din resa.',
					link: {
						text: 'Hitta din faktura här',
						href: 'https://www.tui.se'
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
				},
				{
          id: 5,
					name: 'Avresa',
					desc: 'Äntligen så är det dags för sol och värme. Vi på TUI hoppas att du får en fantastisk resa och glöm inte passet',
					date: new Date().toDateString(),
        }
      ]);
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
      await getFakeData()
        .then( data => {
          dispatch(success(data));
        });
		} catch (error) {
			dispatch(failed(error.response.data));
		}
	};
}