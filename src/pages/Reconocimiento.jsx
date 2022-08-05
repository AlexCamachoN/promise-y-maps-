import grado from '../gradobachillerfrontal.jpeg';
import grados from '../gradobachillerposterior.jpeg'

export default function Reconocimiento (){
    
    return (
    <div className="card mt-4 mx-2 text-center">
        <div className="Mostrar">
            <button id="boton" onclick="mostrar();">Ver grado de bachiller</button>
        </div>
        <div id="img" className="mostrar bachiller">
            <a href="">
                <img src={grado} width='300'/>
                
                <img src={grados} width='300'/>
            </a>
                <div className="mostrar">
                    <button id="boton" onclick="ocultar();">Ocultar</button>
                </div>
        </div>
        <h2 className="text-center">Reconocimientos</h2>
        <p>PRIMER PUESTO VII SALON DE PINTORES PIURANOS IPCNA-RG 2013.</p>
        <p>PRIMERA MENCION HONROSA VII SALON DE PINTORES PIURANOS IPCNA-RG 2012.</p>
        <p>PARTICIPANTE DEL VII CONCURSO INTERNACIONAL DE PINTURA “MARIO URTEAGA ALVARADO”-CAJAMARCA.</p>
        <i></i>
        
    </div>

    )
}