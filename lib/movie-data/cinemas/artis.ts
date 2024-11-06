import { JSONFromURL } from ".."
import { ArtisJSON } from "./artis-types"

// artis default json
// if need xml use XML2JSONFromURL()
const url = "https://www.kino.ee/xml/Schedule"

export function getArtisSchedule() {
  return JSONFromURL<ArtisJSON>(url)
}