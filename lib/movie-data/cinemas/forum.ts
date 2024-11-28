import { JSONFromURL } from ".."
import { ApolloJSON } from "./apollo-types"


//const url = "https://www.forumcinemas.ee/xml/Schedule"
const url = "https://www.apollokino.ee/xml/Schedule"

export function getForumSchedule() {
  return JSONFromURL<ApolloJSON>(url)
}

export function getForumEventSchedule(params: string) {
  return JSONFromURL<ApolloJSON>(url + params)
}