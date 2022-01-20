import { useParams } from "react-router-dom"
import {ItemDetailContainer} from "../components/ItemDetailContainer"

export default function ProductDetail(){
    const {productoId} = useParams()
    console.log(productoId)
    return <div>
        <p className="text-center"><strong>Detalle de Obras</strong></p>
        
        <ItemDetailContainer productoId={productoId} />
        </div>
}