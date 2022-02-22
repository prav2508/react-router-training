import { useState } from "react"
import { updatedComponent } from "./wrapper"

function ClickCounter(props){

    const {count,increment} = props

    return(
        <div>
                <button onClick={increment}>Clicked {count} times</button>
        </div>
    )
}

export default updatedComponent(ClickCounter)