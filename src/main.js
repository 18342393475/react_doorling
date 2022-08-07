
import { useRoutes } from "react-router-dom"
import config from "./router-config"

export default function Main(){
    console.log(config);
    return useRoutes(config);
}