import express from 'express';
import redis from 'redis';
import moment from 'moment';
import fetch from 'node-fetch';

const client = redis.createClient(6379);
const router = express.Router();
const bookedDate = moment().subtract(17,'d');
const departureDate = moment().subtract(17,'d');
const today = moment(new Date()).format('DD MMMM YYYY');
    
const data = {
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
  }

client.on('error', (err) => {
  console.log('Error ' + err)// winston
});

router.post('/get-token', async (req, res) => {})

router.get('/timeline', (req, res) => {
  
  const key = 'user:timeline';

  return res.json({ source: 'api', data });

  // return client.get(key, ( err, timeline ) => {
  //   if(timeline) {
  //     return res.json({ source: 'scache', data: JSON.parse(timeline) })
  //   }
  //   client.setex(key, 3600, JSON.stringify(data))
  // });
});

export default router;