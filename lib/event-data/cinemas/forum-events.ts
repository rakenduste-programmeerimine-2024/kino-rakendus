import { XML2JSONFromURL } from "@/lib/movie-data"
import { EventsData } from "./event-types"

// apollokino default json
// if need xml use XML2JSONFromURL()
const url = "https://www.forumcinemas.ee/xml/Events?includePictures=true"

export function getForumEvents() {
  return XML2JSONFromURL<EventsData>(url)
}