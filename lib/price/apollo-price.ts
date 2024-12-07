import { Show } from "../movie-data/cinemas/apollo-types";
import cocacolaPrice from "./apollo/cocacola-price";
import kristiinePrice from "./apollo/kristiine-price";
import narvaPrice from "./apollo/narva-price";
import othersPrice from "./apollo/others";
import solarisPrice from "./apollo/solaris-price";
import tallinnPrice from "./apollo/tallinn-price";
import tartuparnuPrice from "./apollo/tartu-parnu-price";



export default function apolloPriceCalculation(show: Show):string{
    let price: number = -1;
    console.log(show.TheatreID)
    if(show.TheatreID == 1008){
        price = narvaPrice(show)
    } else if (show.TheatreID == 1013){
        price = kristiinePrice(show)
    } else if (show.TheatreID == 1005){
        price = solarisPrice(show)
    } else if (show.TheatreID == 1007 || show.TheatreID == 1017){
        price = tallinnPrice(show)
    } else if (show.TheatreID == 1023){
        price = cocacolaPrice(show)
    } else if (show.TheatreID == 1011 || show.TheatreID == 1014 || show.TheatreID == 1024 || show.TheatreID == 1002){
        price = tartuparnuPrice(show)
    } else{
        price = othersPrice(show)
    }
    if(price == -1){
        return "Hinda ei leitud"
    }
    return price + " €"
}