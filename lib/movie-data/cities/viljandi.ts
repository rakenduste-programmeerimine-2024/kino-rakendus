import { XML2JSONFromURL } from ".."
import { ForumXML } from "../cinemas/forum-types"

const url = "https://www.forumcinemas.ee/xml/Schedule?nrOfDays=14"

export function getViljandiSchedule() {
  return XML2JSONFromURL<ForumXML>(url)
}