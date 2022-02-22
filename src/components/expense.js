import { useLocation, useParams, useSearchParams } from "react-router-dom"

function Expense() {

    const params = useParams()
    const [param] = useSearchParams()
    const cost = param.get("cost")

    const location = useLocation()

    return (
        <div>
            <h1>Expense</h1>
        {cost}
            {params.expense}
            {location.state}
        </div>


    )
}

export default Expense