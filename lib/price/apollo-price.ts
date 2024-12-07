import { Show } from "../movie-data/cinemas/apollo-types";
import narvaPrice from "./apollo/narva-price";



export default function apolloPriceCalculation(show: Show):string{
    //const supabase = createClient();
    let price: number = -1;
    if(show.TheatreID == 1008){
        price = narvaPrice(show)
    }
    if(price == -1){
        return "Hinda ei leitud"
    }
    return price + " €"
}