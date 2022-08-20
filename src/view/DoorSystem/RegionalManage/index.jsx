import AreaZtree from "./components/areaZtree"
import Content from './components/content'

export default function List(){
    return (
        <div className="d-flex ">
            <div style={{width: '300px'}}><AreaZtree/></div>
            <div className="flex-fill"><Content/></div>
        </div>
    )
}