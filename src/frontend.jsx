import { useEffect } from "react"
import axios from "axios"
export default function App(){

    var today = new Date()
    var date  = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear
    useEffect( () => {
        const promise = axios.get(`http://localhost:4000/holidays`)
        promise.then( (response) => {console.log(response.data)} )
        promise.catch( () => {console.log(`error`)} ,[] )
    } )
    function showDate(){
        return(
            <>
                <h1>~``</h1>
            </>
        )
    }
    return(
        <>
            <h1> teste front </h1>
        </>
    )
}