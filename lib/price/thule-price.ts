import { Show } from "../movie-data/cinemas/thule-types";

export default function thulePriceCalculation(show: Show):number{
    //const [date, time] = show.dttmShowStart.split('T')
    let price: number = "Hinda ei leitud";
    const dateTime = new Date(show.dttmShowStart);
    if(dateTime.getDay() == 4){
        price = "4,50€"
    } else if(dateTime.getDay() <= 4 && dateTime.getHours() <= 17){
        price = "5.50€"
    } else if(dateTime.getDay() <= 3 && dateTime.getHours() > 17){
        price = "8,20€"
    } else {
        price = "9,90€"
    }
    return price
}