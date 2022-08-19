import {lazy} from 'react';
import { Navigate } from 'react-router-dom';
const RegionalManageList = lazy(() => import('@view/DoorSystem/RegionalManage/index'));

const config = {
    path: '/DoorSystem',
    children: [
        {index: true, element: <Navigate to="RegionalManage/Index"/>},
        {
            path: 'RegionalManage',
            children: [
                {index: true, element: <Navigate to="Index" />},
                {
                    path: 'Index',
                    element: <RegionalManageList/>
                }
            ]
        }
    ]
}

export default config;