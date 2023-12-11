import React from "react";
import { useState } from "react";
export default function Myfruits(){
    const [frut ,setFrut]=useState('');
    const [frutList , setFruitsList]=useState([]);
    const displayList =()=>
        frutList.map((frut,idxFruit)=><li key={idxFruit}>{frut}</li>)
    
    const handelChange = ()=>{
        const fruitt =document.querySelector('#frut').value;
        setFrut(fruitt);
    }
    const handelClick =(e)=>{
        e.preventDefault();
        setFruitsList([...frutList,frut])

        
    }
  
    return(
        <>
        <label>Enter fruit</label>
        <input type="text" id="frut" onChange={handelChange}></input>
        <input type="submit" onClick={handelClick} value="add"></input>
        <h2>Fruits :</h2><br></br>
        <ul>
            {displayList()}
        </ul>
        </>
    )
}