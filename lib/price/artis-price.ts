"use client"

import { Show } from "../movie-data/cinemas/artis-types";


export default function artisPriceCalculation(show: Show):number{
    //const [date, time] = show.dttmShowStart.split('T')
    let price: number = 0;
    const dateTime = new Date(show.dttmShowStart);
    if(dateTime.getDay() == 0){
        price = 9.90
    } else if(dateTime.getDay() <= 5 && dateTime.getHours() <= 17){
        price = 7
    } else if(dateTime.getDay() <= 4 && dateTime.getHours() > 17){
        price = 8.20
    } else {
        price = 9.90
    }
    return price
}