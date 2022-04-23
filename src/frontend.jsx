import { useEffect } from "react"
import axios from "axios"
import React from "react"
export default function App(){

    let today = new Date()
    let date  = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    const [resposta, setResposta] = React.useState('')
    useEffect( () => {
        const promise = axios.get(`http://localhost:5000/holidays`)
        promise.then( (response) => {console.log(response.data)} )
        promise.catch( () => {console.log(`error`)} ,[] )
    } )
    useEffect( () => {
        const promise = axios.get('http://localhost:5000/is-today-holiday')
        promise.then( (response) => {setResposta(response.data)} )
        promise.catch( () => {console.log('error')} ) 
    } )
    return(
        <>
            <h1>Dia de Hoje</h1>
            <h3>{date}</h3>
            <h3>{resposta}</h3>
        </>
    )
}