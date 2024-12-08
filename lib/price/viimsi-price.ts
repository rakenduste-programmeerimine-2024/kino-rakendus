import { Show } from "../movie-data/cinemas/viimsi-types";

export default function viimsiPriceCalculation(show: Show, supabaseData: any):string{
    let price: number = -1;
    const dateTime = new Date(show.dttmShowStart);
    if(show.PresentationMethod == "2D"){
        if(dateTime.getDay() == 0){
            price = 10
        } else if(dateTime.getDay() <= 5 && dateTime.getHours() <= 17){
            price = 8.20
        } else if(dateTime.getDay() <= 4 && dateTime.getHours() > 17){
            price = 9.30
        } else {
            price = 10
        }
    } else {
        if(dateTime.getDay() == 0){
            price = 11
        } else if(dateTime.getDay() <= 5 && dateTime.getHours() <= 17){
            price = 8.4
        } else if(dateTime.getDay() <= 4 && dateTime.getHours() > 17){
            price = 9.4
        } else {
            price = 11
        }
    }
    if(price == -1){
        return "Hinda ei leitud"
    }
    return price + " €"
}