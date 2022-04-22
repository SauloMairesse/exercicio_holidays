import { useEffect } from "react"
import axios from "axios"
export default function App(){

    let today = new Date()
    let date  = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    useEffect( () => {
        const promise = axios.get(`http://localhost:4000/holidays`)
        promise.then( (response) => {console.log(response.data)} )
        promise.catch( () => {console.log(`error`)} ,[] )
    } )
    return(
        <>
            <h1>Dia de Hoje</h1>
            <h3>{date}</h3>
        </>
    )
}