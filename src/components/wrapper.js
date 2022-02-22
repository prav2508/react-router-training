import { useState } from "react"

export const updatedComponent = InputComponent =>{

    function NewComponent(){


        const[count,setCount] = useState(0)


        const increment = ()=>{
            setCount(count + 1)
        }

        return(
            <InputComponent count={count} increment={increment}/>
        )
    }

    return NewComponent
}

