import { Show } from "../movie-data/cinemas/apollo-types";
import cocacolaPrice from "./apollo/cocacola-price";
import kristiinePrice from "./apollo/kristiine-price";
import narvaPrice from "./apollo/narva-price";
import othersPrice from "./apollo/others";
import solarisPrice from "./apollo/solaris-price";
import tallinnPrice from "./apollo/tallinn-price";
import tartuparnuPrice from "./apollo/tartu-parnu-price";



export default function apolloPriceCalculation(show: Show, supabaseData: any):string{
    let price: number = -1;
    console.log(supabaseData)
    console.log(supabaseData[0])
    if(show.Theatre == "Apollo Kino Astri"){
        price = narvaPrice(show)
    } else if (show.Theatre == "Apollo Kino Kristiine"){
        price = kristiinePrice(show)
    } else if (show.Theatre == "Apollo Kino Solaris"){
        price = solarisPrice(show)
    } else if (show.Theatre == "Apollo Kino Mustamäe" || show.Theatre == "Apollo Kino Ülemiste"){
        price = tallinnPrice(show)
    } else if (show.Theatre == "Apollo Kino Coca-Cola Plaza"){
        price = cocacolaPrice(show)
    } else if (show.Theatre == "Apollo Kino Lõunakeskus" || show.Theatre == "Apollo Kino Eeden" || show.Theatre == "Apollo Kino Tasku" || show.Theatre == "Apollo Kino Pärnu"){
        price = tartuparnuPrice(show)
    } else{
        price = othersPrice(show)
    }
    if(price == -1){
        return "Hinda ei leitud"
    }
    supabaseData.forEach(element => {
        if(element.membership_id == 4){
            price = price * 0.9
        }
    });
    return Number(price.toFixed(2)) + " €"
}