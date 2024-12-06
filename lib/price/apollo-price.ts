"use client"

import { createClient } from "@/utils/supabase/client";
import { Show } from "../movie-data/cinemas/apollo-types";



export default function apolloPriceCalculation(show: Show):string{
    const supabase = createClient();
    console.log(supabase.storage.listBuckets())
    let price: string = "tekst";
    return price
}