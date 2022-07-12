import { useParams } from "react-router-dom";

export default function DocSub(){
    let params = useParams();
    console.log(params);
    return (
        <div>
            <h2>id: {params.id}</h2>
        </div>
    )
}