import { useState } from "react"
import { context } from "./context"
import Service from "./service"

function Dashboard() {
    const [word, setWord] = useState("hello")
    return (
        <div>
            <h1>Dashboard</h1>
            <context.Provider value={word}>
                <Service />
            </context.Provider>

        </div>
    )
}

export default Dashboard