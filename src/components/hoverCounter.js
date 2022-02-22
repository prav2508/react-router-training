import { useState } from "react"
import { updatedComponent } from "./wrapper"

function HoverCounter(props){

    const {count,increment} = props

    return(
        <div>
                <button onMouseOver={increment}>Clicked {count} times</button>
        </div>
    )
}

export default updatedComponent(HoverCounter)