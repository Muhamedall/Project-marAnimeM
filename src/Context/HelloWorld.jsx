
import  {useContext} from 'react';
import {AppContext} from './App'
export   default function HelloWorld({age,lastName}){
    const context=useContext(AppContext)
    return (
        <>
        <h1 style={(context.isDarkMode)?{color:'white'}:{color:'red'}}>Hello {lastName} {age>= 18 ? 'Adult' : 'Minor'}</h1>
        </>
    )

}