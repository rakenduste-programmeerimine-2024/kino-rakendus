import { XML2JSONFromURL } from ".."
import { ForumXML } from "../cinemas/forum-types"

const url = "https://www.forumcinemas.ee/xml/Schedule"

export function getViljandiSchedule() {
  return XML2JSONFromURL<ForumXML>(url)
}