import { Show } from "../../movie-data/cinemas/apollo-types";

export default function narvaPrice(show: Show):number{
    let price: number = -1;
    const dateTime = new Date(show.dttmShowStart);
    if(dateTime.getDay() == 0){
        price = 8.54
    } else if(dateTime.getDay() <= 5 && dateTime.getHours() < 17){
        price = 5.54
    } else if(dateTime.getDay() <= 4 && dateTime.getHours() >= 17){
        price = 6.66
    } else {
        price = 8.54
    }
    if(show.PresentationMethod == "3D"){
        price += 1
    }
    return price
}