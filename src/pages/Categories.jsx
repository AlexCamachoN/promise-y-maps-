import {ItemListContainer} from "../components/ItemListContainer"
import { useParams } from "react-router-dom"

export default function Categories(){
    const {catid} = useParams();
    
    
    
    
    return(
        <div className="container">
            <ItemListContainer artes={catid} />
        </div>
    )
}