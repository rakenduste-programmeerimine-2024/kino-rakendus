import { XML2JSONFromURL } from ".."
import { ViimsiXML } from "./viimsi-types"

const url = "https://www.viimsikino.ee/xml/Schedule/"

export function getViimsiSchedule() {
  return XML2JSONFromURL<ViimsiXML>(url)
}