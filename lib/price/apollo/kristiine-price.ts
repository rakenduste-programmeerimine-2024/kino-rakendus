import { Show } from "../../movie-data/cinemas/apollo-types";

export default function kristiinePrice(show: Show):number{
    let price: number = -1;
    const dateTime = new Date(show.dttmShowStart);
    if(dateTime.getDay() == 0){
        price = 11.99
    } else if(dateTime.getDay() <= 5 && dateTime.getHours() < 17){
        price = 10.10
    } else if(dateTime.getDay() <= 4 && dateTime.getHours() >= 17){
        price = 11.21
    } else {
        price = 11.99
    }
    if(show.PresentationMethod == "3D"){
        price += 1
    }
    return price
}