import ClickCounter from "./clickCounter"
import HoverCounter from "./hoverCounter"

function Hoc(){
    return(
        <div>
            <h1>HOC</h1>
            <ClickCounter/>
            <HoverCounter/>
        </div>
    )
}

export default Hoc