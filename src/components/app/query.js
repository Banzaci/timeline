import { gql } from 'apollo-boost';

export const TIMELINE = gql`
{
  timeLineById(userId: 1){
    today,
    departure {
      name,
      desc,
      date,
    },
    booked {
      name,
      desc,
      date,
      link {
        text,
        href
      }
    },
    timeline {
      id,
      name,
      desc,
      date,
      link {
        text,
        href
      },
      task {
        completed
      }
    }
  }
}
`;