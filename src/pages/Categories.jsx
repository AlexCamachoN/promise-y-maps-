import {ItemListContainer} from "../components/ItemListContainer"
import { useParams } from "react-router-dom"
export default function Categories(){
    const {Catid } = useParams();
    return(
        <div className="container">
            <ItemListContainer key={Catid} />
        </div>
    )
}