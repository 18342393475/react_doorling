import React from 'react'
import Doc from "./views/doc"
import Home from "./views/home"
import DocSub from "./views/docSub"
import DocIndex from "./views/docIndex"
import NotFount from "./views/404"
import App from "./App"
let menu = [
    {
        path: "/",
        element: <App/>,
        children: [
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
    {
        path: '*',
        element: <NotFount/>
    }
]

export default menu