import Gallery from "@/app/components/Gallery";
import React from "react";
 type Props ={
    params:{
        myParams: (string | undefined) []
    }
 }
 export function generateMetadata({params:{myParams}}:Props){
   const topic= myParams?.[0] ?? "Cars"
   const page= myParams?.[1] ?? "1"
   return{
        title: `Images of ${topic} - Page ${page}`
    }
 }
 export default function SearchResults({params:{myParams}}:Props){
   const topic= myParams?.[0] ?? "Cars"
   const page= myParams?.[1] ?? "1" 
   return <Gallery topic={topic} page={page}/>
 }