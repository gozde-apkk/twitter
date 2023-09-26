import {createBrowserRouter} from "react-router-dom";
import Explore from "../explore/Explore";
import Home from "../home/Home";
import Notification from "../notification/Notification";
import MainLayout from "../layout/MainLayout";
import Profile from "../profile/Profile";
import Messages from "../messages/Messages";
import Lists from "../lists/Lists";

const routes = createBrowserRouter([
    {
        path: '/',
        element : <MainLayout/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path: '/explore',
                element: <Explore/>
            },
            {
                path : '/notifications',
                element:  <Notification/>
            },
            {
                path : '/messages',
                element : <Messages/>
            },
            {
                path : '/lists',
                element : <Lists/>
            },
            {
                path: ':slug',
                element : <Profile/>
            }

        ]
    },
  
])


export default routes