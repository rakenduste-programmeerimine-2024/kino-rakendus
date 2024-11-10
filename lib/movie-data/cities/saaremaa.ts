import { XML2JSONFromURL , JSONFromURL} from ".."
import { ThuleXML } from "../cinemas/thule-types"
import { ApolloJSON } from "../cinemas/apollo-types"

const urlThule = "https://pilet.thulekoda.ee/xml/Schedule/"
const urlApollo = "https://www.apollokino.ee/xml/Schedule?area=1012"


export function getSaaremaaSchedule() {
  return [XML2JSONFromURL<ThuleXML>(urlThule), JSONFromURL<ApolloJSON>(urlApollo)]
}