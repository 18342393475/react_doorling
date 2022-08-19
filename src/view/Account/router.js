import {lazy} from 'react';
import { Navigate } from 'react-router-dom';
const Login = lazy(() => import('@view/Account/Login'));

const config = {
    path: '/Account',
    children: [
        {index: true, element: <Navigate to='Login'/>},
        {
            path: 'Login',
            element: <Login/>
        }
    ]
}

export default config