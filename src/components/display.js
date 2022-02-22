import { useContext } from "react"
import { context } from "./context"

function Display(){

    const word = useContext(context)

    return(
        <div>
           <h1>{word}</h1> 
        </div>
    )
}

export default Display