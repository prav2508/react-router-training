import { useLocation } from "react-router-dom"


function Invoice() {

    const location = useLocation()

    return (
        <div>
            <h1>Invoice</h1>
        {location.state}
        </div>


    )
}

export default Invoice