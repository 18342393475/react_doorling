import { Suspense, lazy } from 'react';
import Doc from "./view/doc"
import Home from "./view/home"
import DocSub from "./view/docSub"
import DocIndex from "./view/docIndex"
import NotFount from "./view/404"
import Account from '@view/Account/router'
import DoorSystem from '@view/DoorSystem/router'
import App from "./App"
import { Navigate } from 'react-router-dom'
let menu = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                element: <Home/>,
                index: true,
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'Doc',
                element: <Doc/>,
                children: [
                    {
                        index: true, 
                        element: <DocIndex/>
                    },
                    {
                        path: ':id',
                        element: <DocSub/>
                    }
                ]
            }
        ]
    },
    Account,
    DoorSystem,
    {
        path: '*',
        element: <NotFount/>
    }
]

export default menu