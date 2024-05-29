import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Auth/LoginPage";

const route = createBrowserRouter([
    { 
        path:'/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <LoginPage/>
            }
        ]
    }
])

export default route;