import { XML2JSONFromURL } from ".."
import { ForumXML } from "./forum-types"


const url = "https://www.forumcinemas.ee/xml/Schedule"

export function getForumSchedule() {
  return XML2JSONFromURL<ForumXML>(url)
}

export function getForumEventSchedule(params: string) {
  return XML2JSONFromURL<ForumXML>(url + params)
}