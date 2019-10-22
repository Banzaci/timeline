import { gql } from 'apollo-server-express'

const Timeline = gql`
  type Booked {
    name: String,
    date: String,
    desc: String,
    link: Link
  }
  type Departure {
    name: String,
    date: String,
    desc: String
  }
  type Task {
    completed: Int
  }
  type Link {
    text: String,
    href: String
  }
  type Timeline {
    id: Int,
    name: String,
    date: String,
    desc: String,
    task: Task,
    link: Link
  }
  type TimelineProps {
    today: String,
    booked: Booked,
    departure: Departure,
    timeline: [Timeline]
  }
  type Query {
    timeLineById(userId: Int): TimelineProps
  }
`

export default Timeline