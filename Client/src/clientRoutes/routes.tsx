import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";

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