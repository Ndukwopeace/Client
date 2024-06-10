import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Auth/LoginPage";
import Dashboard from "../pages/Dashboard";
// import LayOut from "../components/LayOut/LayOut";
import CoursesComponent from "../components/DashContent/Courses/CoursesComponent";
import Home from "../components/DashContent/Home";


const route = createBrowserRouter([
    { 
        path:'/',
        element: <App/>,
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            },

            {
                path: 'dashboard/',
                element: <Dashboard/>,
                children: [                   
                    {
                        path: 'courses',
                        element : <CoursesComponent/>,
                    },
                    {
                        path: 'home',
                        element : <Home/>,
                        index: true
                    },
                ]
                // element: <LayOut/>
            },
          

        ]
    }
])

export default route;