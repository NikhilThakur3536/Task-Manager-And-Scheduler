import {Montserrat} from "next/font/google";
import {Poppins} from "next/font/google";
import { Mulish } from "next/font/google";
import { K2D } from "next/font/google";

export const k2d= K2D({
  subsets:['latin'],
  weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800"],
  style: ['normal', 'italic'],
  variable: '--font-k2d',
})
export const montserrat= Montserrat({
  subsets:['latin'],
  weight:['300','400','500','900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
})

export const poppins= Poppins({
    subsets:['latin'],
    weight:['400','500','900','700'],
    style: ['normal', 'italic'],
    variable: '--font-poppins',
  })

export const muli=Mulish({
  subsets:['latin'],
  weight:['400','500','900','700'],
  style: ['normal', 'italic'],
  variable: '--font-muli',
})