import moment from 'moment';

const bookedDate = moment().subtract(17,'d').format('DD MMMM YYYY');
const today = moment(new Date()).format('DD MMMM YYYY');
const payedDate = moment().add(6,'d').format('DD MMMM YYYY');
const vaccinationDate = moment().add(9,'d').format('DD MMMM YYYY');
const visaDate = moment().add(13,'d').format('DD MMMM YYYY');
const taxfreeDate = moment().add(16,'d').format('DD MMMM YYYY');
const exchangeDate = moment().add(19,'d').format('DD MMMM YYYY');
const departureDate = moment().add(22,'d').format('DD MMMM YYYY');

const mocked = [{
  id: 1,
  today,
  booked: {
    id: 1,
    name: 'Min bokning!',
    date: bookedDate,
    desc: 'Grattis! Du har bokat din resa till Omar för två till hotell Desert Inn med avresa 12 mars 2020.',
    link: {
      text: 'Läs mer om din resa här',
      href: 'https://www.tui.se'
    }
  },
  timeline: [
    {
      id: 2,
      name: 'Vaccinationer',
      date: vaccinationDate,
      desc: 'Du behöver vaccinera dig minst 3 veckor innan avresa till Omar.',
      task: {
        completed: 0
      }
    },
    {
      id: 3,
      name: 'Betala resan',
      date: payedDate,
      desc: 'Senast dag för att betala din resa.',
      link: {
        text: 'Hitta din faktura här',
        href: 'https://www.tui.se'
      },
      task: {
        completed: 1
      }
    },
    {
      id: 6,
      name: 'Köpa badbyxor och solkräm',
      date: taxfreeDate,
      desc: 'Har du inte inskaffat badkläder så är det hög tid för det nu. Solkräm hittar du i våran taxfreebutik.',
      link: {
        text: 'Taxfreebutiken',
        href: 'https://www.tui.se'
      },
      task: {
        completed: 2
      }
    },
    {
      id: 5,
      name: 'Visum',
      date: visaDate,
      desc: `Du behöver ansöka om visum till Omar. Rekommenderad sista dag är ${visaDate}. Klicka på länken nedan för att söka visum.`,
      link: {
        text: 'Ansök här',
        href: 'https://www.tui.se'
      },
      task: {
        completed: 0
      }
    },
    {
      id: 4,
      name: 'Växla pengar',
      date: exchangeDate,
      desc: 'Valutan i Oman heter Omansk rial och Primär valuta är 100 SEK = 3,59 OMR. Klicka på länken nedan om du vill veta mer om prisindex för oman.',
      link: {
        text: 'Prisindex',
        href: 'https://www.tui.se'
      },
      task: {
        completed: 0
      }
    },
  ],
  departure: {
    id: 5,
    name: 'Avresa',
    desc: 'Äntligen så är det dags för sol och värme. Vi på TUI hoppas att du får en fantastisk resa och glöm inte passet',
    date: departureDate,
  }
}]

const resolvers = {
  Query: {
    timeLineById(_, { userId }) {
      return mocked.find(({ id }) => id === userId);
    }
  }
}

export default resolvers