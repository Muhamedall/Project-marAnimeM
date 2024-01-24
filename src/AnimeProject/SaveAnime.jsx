import React from "react";
import { useEffect } from "react";

const SaveAnime =({dataAnime})=>{


    useEffect(()=>{
        localStorage.setItem("dataAnime",JSON.stringify(dataAnime));
        JSON.parse(localStorage.getItem('key'))


    },[dataAnime])

  

    return(
        <>
        <h1>hello</h1>
        

        </>

    )
    


}
export default SaveAnime;