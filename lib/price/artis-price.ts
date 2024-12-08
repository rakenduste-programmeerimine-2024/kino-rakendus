"use client"

import { Show } from "../movie-data/cinemas/artis-types";


export default function artisPriceCalculation(show: Show):string{
    //const [date, time] = show.dttmShowStart.split('T')
    let price: number = -1;
    const dateTime = new Date(show.dttmShowStart);
    if(dateTime.getDay() == 0){
        price = 8.90
    } else if(dateTime.getDay() <= 5 && dateTime.getHours() <= 17){
        price = 7
    } else if(dateTime.getDay() <= 4 && dateTime.getHours() > 17){
        price = 8.20
    } else {
        price = 8.90
    }
    if(price == -1){
        return "Hinda ei leitud"
    }
    return price + " €"
}