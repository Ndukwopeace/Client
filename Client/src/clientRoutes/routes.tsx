import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Dashboard";


const route = createBrowserRouter([
    { 
        path:'/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <LoginPage/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },

        ]
    }
])

export default route;