import { XML2JSONFromURL } from ".."
import { ThuleXML } from "./thule-types"

const url = "https://pilet.thulekoda.ee/xml/Schedule/"

export function getThuleSchedule() {
  return XML2JSONFromURL<ThuleXML>(url)
}