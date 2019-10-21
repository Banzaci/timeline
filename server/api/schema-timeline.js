import { gql } from 'apollo-server-express'

const Timeline = gql`
  type Booked {
    name: String,
    date: String,
    desc: String
  }
  type Task {
    complete: Boolean
  }
  type Timeline {
    id: Int,
    name: String,
    date: String,
    desc: String,
    task: Task
  }
  type TimelineType {
    today: String,
    booked: Booked,
    timeline: [Timeline]
  }
  type Query {
    getTimelineByUserId(userId: Int): TimelineType
  }
`

export default Timeline