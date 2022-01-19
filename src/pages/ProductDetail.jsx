import { useParams } from "react-router-dom"
import {ItemDetailContainer} from "../components/ItemDetailContainer"

export default function ProductDetail(){
    const {productId} = useParams
    return <ItemDetailContainer productId={productId} />
}