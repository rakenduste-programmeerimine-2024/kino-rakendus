import { Show } from "../../movie-data/cinemas/apollo-types";



export default function narvaPrice(show: Show):number{
    //const supabase = createClient();
    let price: number = -1;
    if(show.TheatreID == 1008){
        price = narvaPrice()
    }
    return price
}