import { XML2JSONFromURL , JSONFromURL} from ".."
import { ThuleXML } from "../cinemas/thule-types"
import { ApolloJSON } from "../cinemas/apollo-types"

const urlThule = "https://pilet.thulekoda.ee/xml/Schedule?nrOfDays=14"
const urlApollo = "https://www.apollokino.ee/xml/Schedule?area=1012&nrOfDays=14"


export function getSaaremaaSchedule() {
  return [XML2JSONFromURL<ThuleXML>(urlThule), JSONFromURL<ApolloJSON>(urlApollo)]
}