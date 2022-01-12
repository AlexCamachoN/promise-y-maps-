export function Item ( { producto } )  {
    return  (
      < div  className = "relativo w-80 h-80 bg-gray-100" >
        <div  className = "absolute flex flex-col items-start" >
          < div  className = "texto-lg fuente-negrita p-2 bg-gris-900 texto-blanco" >
            { producto . titulo }
          </ div >
          < div  className = "texto-lg fuente-negrita p-2 bg-gris-900 texto-blanco" >
            { producto . precio }
          </ div>
        </ div >
        < div  className = "recuadro absoluto-0" >
          < img
            origen = { producto . pictureUrl }
            alt = { producto . titulo }
            className = "h-lleno w-lleno"
          />
        </ div >
        <div  className = "absolute bottom-0 right-0 items-start" >
          <div  className = "text-md fuente-negrita p-2 bg-blanco" >
             stock: { producto .existencias }
          </ div>
        </ div >
      </ div>
    )
  }