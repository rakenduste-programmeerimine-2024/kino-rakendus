import { JSONFromURL } from ".."
import { ApolloJSON } from "./apollo-types"

// apollokino default json
// if need xml use XML2JSONFromURL()
const url = "https://www.apollokino.ee/xml/Schedule"

export function getApolloSchedule() {
  return JSONFromURL<ApolloJSON>(url)
}