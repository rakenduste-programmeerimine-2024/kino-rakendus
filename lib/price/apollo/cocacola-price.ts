import { Show } from "../../movie-data/cinemas/apollo-types";

export default function cocacolaPrice(show: Show):number{
    let price: number = -1;
    const dateTime = new Date(show.dttmShowStart);
    if(dateTime.getDay() == 0){
        price = 9.99
    } else if(dateTime.getDay() <= 5 && dateTime.getHours() < 17){
        price = 8.10
    } else if(dateTime.getDay() <= 4 && dateTime.getHours() >= 17){
        price = 9.21
    } else {
        price = 9.99
    }
    if(show.PresentationMethod == "3D"){
        price += 1
    }
    if(show.TheatreAuditorium == "5. lukssaal" || show.TheatreAuditorium == "4. lukssaal" || show.TheatreAuditorium == "3. lukssaal" || show.TheatreAuditorium == "1. lukssaal"){
        price += 3
    }else if(show.TheatreAuditorium == "A.Le Coq Sviit"){
        price += 9
    }
    return price
}