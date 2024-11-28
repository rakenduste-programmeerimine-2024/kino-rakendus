import { XML2JSONFromURL } from ".."
import { ApolloJSON } from "../cinemas/apollo-types"
import { ViimsiXML } from "../cinemas/viimsi-types"

const url = "https://www.apollokino.ee/xml/Schedule?area=1025&nrOfDays=14"

export function getViljandiSchedule() {
  return XML2JSONFromURL<ViimsiXML>(url)
}