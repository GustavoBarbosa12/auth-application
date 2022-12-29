import { BrowserRouter } from "react-router-dom"
import { NoAuthRoutes } from "./routes/no-auth-routes"

export const RouterProvider = () => {
    return(
        <BrowserRouter>
            <NoAuthRoutes />
        </BrowserRouter>
    )
}