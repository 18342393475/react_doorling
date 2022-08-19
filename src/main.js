import { useRoutes } from "react-router-dom"
import config from './router-config'

export default function RouterConfig(){
    let element = useRoutes(config);
    console.log(element)
    return (
        element
    )
}