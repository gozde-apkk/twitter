import {createBrowserRouter} from "react-router-dom";
import Explore from "../../pages/explore/Explore";
import Home from "../../pages/home/Home";
import Notification from "../../pages/notification/Notification";
import MainLayout from "../../layout/MainLayout";
import Profile from "../../pages/profile/Profile";
import Messages from "../../pages/messages/Messages";
import Lists from "../../pages/lists/Lists";
import Authorization from "../../layout/Authorization";
import Logout from "../../pages/logout/Logout";

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
    {
        
        path: '/logout',
        element : <Authorization/>,
        children: [
            {
                index:true,
                element:<Logout/>
            }]
    }
  
])


export default routes